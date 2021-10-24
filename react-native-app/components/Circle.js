import { StyleSheet, TouchableOpacity , Text } from 'react-native';
import React from 'react';

export default function CircleButton({title, action}) {
    return(
        <TouchableOpacity  style = {[styles.button, {backgroundColor: 'white'}]} onClick = {action} onPress = {action}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor:'gray',
        borderStyle:'solid'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    }
})