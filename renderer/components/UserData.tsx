// @flow
import * as React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import InputValue from "./defaultComponent/InputValue";
import styled from "styled-components";

type Props = {
    input: {
        selectWeek: string,
        server: string,
        startRank: number,
        sliceRank: number,

    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setInput: React.Dispatch<any>
};
const itemStyle = {
    color: 'gray',
    '&.Mui-checked': {
        color: '#5766F2'
    }
}
const RadioWrap = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 1rem;
`
const InputWrap = styled.div`
  display: flex;

  & :first-child {
    margin-right: 1rem;
  }
`
export const UserData = ({input, onChange, setInput}: Props) => {
    return (
        <>
            <RadioWrap>
                <FormControl>
                    <FormLabel id='selectWeek' sx={{color: "white"}}>select week</FormLabel>
                    <RadioGroup
                        aria-labelledby="week-radio-buttons-group"
                        name="select week"
                        value={input.selectWeek}
                        onChange={e => setInput(prev => ({...prev, selectWeek: e.target.value}))}
                        sx={{
                            '&.MuiFormGroup-root': {
                                flexFlow: 'row'
                            }
                        }}
                    >
                        {['thisWeek', 'lastWeek'].map((week, index) => (
                            <FormControlLabel
                                key={index}
                                value={week}
                                control={<Radio sx={itemStyle}/>}
                                label={week}
                                sx={{color: 'white'}}/>
                        ))}
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id='server' sx={{color: "white"}}>server</FormLabel>
                    <RadioGroup
                        aria-labelledby="server-radio-buttons-group"
                        name="server"
                        value={input.server}
                        onChange={e => setInput(prev => ({...prev, server: e.target.value}))}
                        sx={{
                            '&.MuiFormGroup-root': {
                                flexFlow: 'row'
                            }
                        }}
                    >
                        {['server1', 'server2'].map((server, index) => (
                            <FormControlLabel
                                key={index}
                                value={server}
                                control={<Radio sx={itemStyle}/>}
                                label={server}
                                sx={{color: 'white'}}/>
                        ))}
                    </RadioGroup>
                </FormControl>
            </RadioWrap>
            <InputWrap>
                <InputValue input={input.startRank} setInput={onChange} label='start rank' id='startRank'
                            type='number'/>
                <InputValue input={input.sliceRank} setInput={onChange} label="output count" id='sliceRank'
                            type='number'/>
            </InputWrap>

        </>
    );
};
