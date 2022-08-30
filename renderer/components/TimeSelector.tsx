// @flow
import * as React from 'react';
import {DatePicker} from "./defaultComponent/DatePicker";
import {TimePicker} from "./defaultComponent/TimePicker";
import styled from "styled-components";

type Props = {
    input: {
        start: string | Date,
        startTime: string | Date,
        end: string | Date,
        endTime: string | Date
    },
    setInput: React.Dispatch<any>
};

const TimeWrap = styled.div`
  display: flex;

  & :first-child {
    margin-right: 1rem;
  }
`
export const TimeSelector = ({input, setInput}: Props) => {

    const onChange = (event, id) => {
        setInput((prev) => ({
            ...prev,
            [id]: event
        }))
    }

    return (
        <>
            <TimeWrap>
                <DatePicker value={input.start} onChange={(event) => onChange(event, 'start')} label="start date"/>
                <TimePicker label='start time' value={input.startTime} onChange={(e) => onChange(e, 'startTime')}/>
            </TimeWrap>
            <TimeWrap>
                <DatePicker value={input.end} onChange={(event) => onChange(event, 'end')} label="end date"/>
                <TimePicker label='end time' value={input.endTime} onChange={(e) => onChange(e, 'endTime')}/>
            </TimeWrap>
        </>
    );
};
