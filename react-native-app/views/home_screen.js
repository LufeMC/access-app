import Button from '../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import TextInputView from '../components/TextInput';
import TextView from '../components/Text';

export default function HomeScreen({ navigation }) {
    const [loginInfoName, setLoginInfoName] = useState('')
    const [loginInfoPN, setLoginInfoPN] = useState('')
    const [imageTime, setImageTime] = useState(0)

    useEffect(() => {
        if (imageTime <= 2) {
            setTimeout(() => {
                setImageTime(time => time + 1)
            }, 1000)
        }
    })

    useEffect(() => {
        console.log(imageTime)

    }, [imageTime])

    const enter = () => {
        navigation.navigate('Chatbot', { name: loginInfoName, phoneNumber: loginInfoPN })
    }

    return (
        <View style={styles.container}>
            {imageTime > 2 ? (
                <>
                    <View style={styles.logo}>
                        <Image style={styles.logoImg} source={require('../assets/logo.png')} />
                    </View>
                    <View style={styles.input}>
                        <View style = {styles.title}>
                            <TextView text="A" color='#4285f4' fontSize={30} />
                            <TextView text="c" color='#ea4335' fontSize={30} />
                            <TextView text="c" color='#fbbc05' fontSize={30} />
                            <TextView text="e" color='#4285f4' fontSize={30} />
                            <TextView text="s" color='#34a853' fontSize={30} />
                            <TextView text="s" color='#ea4335' fontSize={30} />
                        </View>
                        <TextInputView placeholder="Name" onChange={setLoginInfoName} />
                        <TextInputView placeholder="Phone Number" onChange={setLoginInfoPN} />
                    </View>
                    <View style={styles.enter}>
                        <Button title='Enter' action={enter} />
                    </View>
                </>
            ) : (
                <Image style={styles.logoImg2} source={require('../assets/logo.png')} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    brandText: {
        fontSize: 25,
        margin: 20
    },
    input: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    enter: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImg: {
        height: 200,
        width: 200,
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: '#4285f4',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: '500'
    },
    enterButton: {
        alignSelf: 'stretch',
        borderRadius: 4,
    },
    enterButtonText: {
        fontSize: 50
    },
    logoImg2: {
        height: 400,
        width: 400
    }
});