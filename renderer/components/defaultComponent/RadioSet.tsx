// @flow
// fsc
import * as React from 'react';
import {FormControl, FormLabel, RadioGroup} from "@mui/material";

type Props = {
    label: string
    children: React.ReactNode
};


export const RadioSet = ({label, children}: Props) => {
    return (
        <FormControl sx={{
            marginBottom: '1rem'
        }}>
            <FormLabel id="demo-row-radio-buttons-group-label"
                       sx={{color: 'white', '&.Mui-focused': {color: 'white'}}}>{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {children}
            </RadioGroup>
        </FormControl>
    );
}
