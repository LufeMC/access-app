import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import TextView from './Text';

export default function TextContainer({text, margin}) {
    return(
        <View style = {[styles.button, {backgroundColor: 'white', marginLeft: margin === 'left' ? 0 : 'auto'}]}>
            <TextView text = {text} color = 'black'/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        maxWidth: '90%',
        height: 'auto',
        padding: 10,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor:'gray',
        borderStyle:'solid',
        margin: 3
    }
})