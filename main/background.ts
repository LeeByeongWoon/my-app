import {app, ipcMain} from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer";

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
ipcMain.on('main-test1', async (evt, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080
    })
    const pageUrl = 'http://localhost:3000'
    await page.goto(pageUrl, {
      waitUntil: 'networkidle0',
    });

    await page.type('#id', res.id);
    await page.type('#password', res.password);
    const message = []

    page.on('dialog', async dialog => {

      console.log(dialog.type());
      evt.sender.send('renderer-test1', dialog.type())
      evt.sender.send('renderer-test1', dialog.message())
      console.log(dialog.message());


      await dialog.accept();

    });
    await page.click('button[id="submit"]');
    evt.sender.send('renderer-test1', 'success')


    await browser.close();
  } catch (e) {
    console.log(e)
  }
})
