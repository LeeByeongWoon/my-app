import {styled, TextField} from "@mui/material";
import React, {HTMLInputTypeAttribute} from "react";

type propType = {
    input: string | number,
    setInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    id: string,
    type?: HTMLInputTypeAttribute,
    variant?: "standard" | "filled" | "outlined"
}

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
export default function InputValue({input, setInput, label, type, id, variant = "outlined"}: propType) {

    return (
        <>
            <CustomTextField id={id} label={label} variant={variant} onChange={setInput} value={input} fullWidth={true}
                             type={type} autoComplete={type === "password" ? 'current-password' : ''}/>
        </>
    )
}
