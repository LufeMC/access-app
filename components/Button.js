import { StyleSheet, TouchableOpacity , Text } from 'react-native';
import React from 'react';

export default function Button({title, action, width = '80%', backgroundColor = '#4285f4', textColor = 'white', fontSize = 20}) {
    return(
        <TouchableOpacity  style = {[styles.button, {width, backgroundColor}]} onClick = {action} onPress = {action}>
            <Text style = {[styles.text, {color: textColor, fontSize}]}>{title}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        fontWeight: '500'
    }
})