import React, {useState} from 'react';
import {ipcRenderer} from 'electron'
import {Button} from "@mui/material";
import InputValue from "../components/defaultComponent/InputValue";
import styled, {createGlobalStyle} from "styled-components";
import {Header} from "../components/defaultComponent/Header";
import dayjs from "dayjs";
import {UserData} from "../components/UserData";
import {TimeSelector} from "../components/TimeSelector";

/**
 * @description styled-Component
 */
const Container = styled.form`
  padding: 0;
  display: flex;
  height: 100vh;
  flex-flow: column;
`

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const ContentLabel = styled.p`
  color: #D8B369;
`

const ItemWrap = styled.div`
  width: 500px;
`

const GlobalStyle = createGlobalStyle`
  body {
    background: #292841;
    margin: 0;
  }
`
type Login = {
    id: string,
    password: string
}

const day = dayjs();

function Home() {
    const lastWeekData = (() => {
        const nowDay = day.get('day');
        const thisSunday = day.subtract(nowDay, 'day').format('YYYY-MM-DD')
        const lastSunday = day.subtract(nowDay + 7, 'day').format('YYYY-MM-DD')
        return [thisSunday, lastSunday]
    })()
    const [login, setLogin] = useState<Login>({
        id: '',
        password: ''
    })
    const [input, setInput] = useState({
        startRank: 1,
        sliceRank: 100,
        selectWeek: 'thisWeek',
        server: 'server1',
        start: lastWeekData[0],
        startTime: null,
        end: lastWeekData[1],
        endTime: null

    })
    const [tempState, setTempState] = useState('')
    const onClick = async () => {
        if (login.id === '' || login.password === '') {
            alert('값을 확인 해주세요')
        } else {
            await ipcRenderer.send('main-test1', login) // call send === async sendSync === sync
            // }
        }
    };
    React.useEffect(() => {
        ipcRenderer.on('renderer-test1', async (evt, res) => {
            // 받아온 데이터 실시간으로 갱신됨
            await setTempState(res)
            console.log(await res)
        });
        return () => {
            ipcRenderer.removeAllListeners('renderer-test1')
        }
    }, [])
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Wrap>
                <ItemWrap>
                    <ContentLabel>login</ContentLabel>
                    <InputValue input={login.id} setInput={onChangeLogin} label='id' id="id"/>
                    <InputValue input={login.password} setInput={onChangeLogin} label='password' type='password'
                                id='password'/>
                    <ContentLabel>UserData Range</ContentLabel>
                    <UserData onChange={onChange} input={input} setInput={setInput}/>
                    <ContentLabel>Play Log</ContentLabel>
                    <TimeSelector input={input} setInput={setInput}/>
                    <Button variant='contained' onClick={onClick} sx={{
                        backgroundColor: '#5766F2',
                        padding: '15px 0',
                        '&:hover': {
                            backgroundColor: '#5766F2'
                        },
                        marginBottom: '1rem'
                    }} fullWidth>crawling</Button>
                </ItemWrap>
            </Wrap>
            <p>{tempState}</p>
        </Container>
    );
}

export default Home;
