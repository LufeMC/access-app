import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default function TextView({text, color = 'white', fontSize = 20}) {
    return(
        <Text style = {[styles.text, {color, fontSize}]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '500'
    }
})