// @flow
import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

type Props = {
    label: string
};
export const Selector = ({label}: Props) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <FormControl fullWidth sx={{
            marginBottom: '1rem',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'gray',
                },
                '&:hover fieldset': {
                    borderColor: '#274F5E',
                },
                '& svg': {
                    color: 'white'
                }
                // '&.Mui-focused fieldset': {
                //     borderColor: 'green',
                // },
            },
        }}>
            <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>{label}</InputLabel>
            <Select
                sx={{
                    color: 'white',
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label={label}
                onChange={handleChange}

            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

    );
};
