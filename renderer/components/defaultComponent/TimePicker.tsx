// @flow
import * as React from 'react';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider, MobileTimePicker} from "@mui/x-date-pickers";
import {styled, TextField} from "@mui/material";

type Props = {
    label: string
    value: string | Date,
    onChange: (e: any, id: string) => void,
};
const CustomTextField = styled(TextField)({
    '& label': {
        color: 'white'
    },
    '& label.Mui-focused': {
        color: "#D8B369"
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
        },
        '&:hover fieldset': {
            borderColor: '#274F5E',
        },
        // '&.Mui-focused fieldset': {
        //     borderColor: 'green',
        // },
    },
    '& input': {
        color: 'white'
    },
    '& ': {
        marginBottom: '1rem'
    }
})
export const TimePicker = ({label, value, onChange}: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
                label={label}
                value={value}
                onChange={onChange}
                renderInput={(params) => <CustomTextField fullWidth {...params}/>}
            />
        </LocalizationProvider>

    );
};
