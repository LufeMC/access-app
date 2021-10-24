import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function TextInputView({placeholder, onChange, color = 'black', focusColor = '#4285f4', padding = 10, margin = 4, width = '80%'}) {
    const [textInputColor, setTextInputColor] = useState(color)
    const [textInputInfo, setTextInputInfo] = useState('')

    useEffect(() => {
        onChange(textInputInfo)
    }, [textInputInfo])

    const onTextInputFocus = () => {
        setTextInputColor(focusColor)
        setTextInputInfo('')
    }

    const onTextInputBlur = () => {
        setTextInputColor(color)
    }

    return(
        <TextInput onChangeText = {setTextInputInfo} value = {textInputInfo} onFocus={() => onTextInputFocus()} onBlur={() => onTextInputBlur()} style = {[styles.inputText, {borderWidth: 1, borderColor:textInputColor, borderStyle:'solid', padding, margin, width}]} placeholder = {placeholder}/>
    )
}

const styles = StyleSheet.create({
    inputText: {
        padding: 10,
        margin: 4,
        borderRadius: 4,
        fontSize: 18,
    }
})