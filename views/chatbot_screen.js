import Button from '../components/Button'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';
import TextInputView from '../components/TextInput';
import TextView from '../components/Text';
import CircleButton from '../components/Circle';
import TextContainer from '../components/TextContainer';

export default function ChatBotScreen({ navigation, route }) {
    const [textInput, setTextInput] = useState('')
    const [optionSelect, setOptionSelect] = useState('')
    const [texts, setTexts] = useState([])
    const [textsHTML, setTextsHTML] = useState(<View></View>)

    useEffect(() => {
        setTexts((prevState) => [...prevState,
        { text: `Hello ${route.params.name}, my name is Access. How can I help you today?\nYou can ask me to\n1. Check the Weather Forecast\n2. Update you with Local News\n3. Show Restaurants close to 1145 Market Street\n4. Call an Uber`, sender: 'bot', id: `textSendOn${new Date().toISOString()}1` },
        ])
        console.log(route.params.name, route.params.phoneNumber)
    }, [])

    useEffect(() => {
        createTextsHTML()
    }, [texts])

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <TextContainer key={Math.random(2 ^ 32)} text={item.text} margin={item.sender === 'bot' ? 'left' : 'right'} />
        )
    };

    const createTextsHTML = () => {
        setTextsHTML(
            <FlatList
                data={texts}
                renderItem={renderItem}
                keyExtractor={item => Math.random(2 ^ 32)}
            />
        )
    }

    const addText = () => {
        if (textInput.trim() !== '') {
            const newTexts = [{ text: textInput, sender: 'user', id: `textSendOn${new Date().toISOString()}` }]
            if (textInput === 'Uber') {
                newTexts.push({ text: 'Enter your pick up location', sender: 'bot', id: `textSendOn${new Date().toISOString()}` })
            } else if (textInput.includes('16 Turk Street')) {
                newTexts.push({ text: 'Enter your destination', sender: 'bot', id: `textSendOn${new Date().toISOString()}` })
            } else if (textInput === '1140 Market Street, San Francisco') {
                const textsNew = [{ text: 'Choose a ride', sender: 'bot', id: `textSendOn${new Date().toISOString()}1` }, { text: '1. Uber X for US$30', sender: 'bot', id: `textSendOn${new Date().toISOString()}2` }, { text: '2. Uber XL for US$40', sender: 'bot', id: `textSendOn${new Date().toISOString()}3` }]
                textsNew.map(text => {
                    newTexts.push(text)
                })
            } else if (textInput === 'Uber X') {
                newTexts.push({ text: 'Your Uber X, Toyota Carola ACZ886, will arrive at pick up in 3 minutes', sender: 'bot', id: `textSendOn${new Date().toISOString()}` })
            } else if (textInput === 'What is Cal Hacks') {
                const textsNew = [
                    { text: 'Cal Hacks is the world\'s largest collegiate hackathon hosted at UC Berkeley. Application for Cal Hacks 8.0 is live now!', sender: 'bot', id: `textSendOn${new Date().toISOString()}1` },
                    { text: 'The latest Tweets from Cal Hacks (@CalHacks). World\'s largest collegiate hackathon, hosted at UC Berkeley and home of the giant stuffed s.', sender: 'bot', id: `textSendOn${new Date().toISOString()}2` },
                ]

                textsNew.map(text => {
                    newTexts.push(text)
                })
            } else if (textInput === 'Restaurants close to 1145 Market Street') {
                const textsNew = [
                    { text: 'VILLION\n4.4  American\n1100 Market St In San Francisco Proper\nDine-in Takeout No-contact delivery', sender: 'bot', id: `textSendOn${new Date().toISOString()}1` },
                    { text: 'Taqueria Cancun\n4.2 Restaurant\n1003 Market St\nCloses soon 8:50PM\nDine-in Takeout No dlivery', sender: 'bot', id: `textSendOn${new Date().toISOString()}2` },
                    { text: 'Montesacro San Francisco\n4.6  Pizza\n510 Stevenson St', sender: 'bot', id: `textSendOn${new Date().toISOString()}3` },
                ]

                textsNew.map(text => {
                    newTexts.push(text)
                })
            } else if (textInput === 'Meaning of cryptocurrency') {
                newTexts.push({ text: 'Dictionary\n\ncryp·to·cur·ren·cy\n\n/ˈkriptōˌkərənsē/\n\nnoun\na digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority. decentralized cryptocurrencies such as bitcoin now provide an outlet for personal wealth that is beyond restriction and confiscation"', sender: 'bot', id: `textSendOn${new Date().toISOString()}` })
            } else if (textInput === 'Weather forecast for tomorrow') {
                newTexts.push({ text: '18°C°F\nPrecipitation: 100%\nHumidity: 85%\nWind: 47 km/h\n\nSan Francisco, CA\nSunday\n\nRain\n\nTemperature     Precipitation   Wind\n\nSat  Sun  Mon  Tue  Wed  Thu  Fri  Sat', sender: 'bot', id: `textSendOn${new Date().toISOString()}` })
            }
            setTexts((prevState) => [...prevState, ...newTexts])
        }

        setTextInput('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TextView text="A" color='#4285f4' fontSize={30} />
                <TextView text="c" color='#ea4335' fontSize={30} />
                <TextView text="c" color='#fbbc05' fontSize={30} />
                <TextView text="e" color='#4285f4' fontSize={30} />
                <TextView text="s" color='#34a853' fontSize={30} />
                <TextView text="s" color='#ea4335' fontSize={30} />
            </View>
            <View style={styles.chat}>
                {textsHTML}
            </View>
            <View style={styles.textboxContainer}>
                {/* <View style={styles.options}>
                    <CircleButton title='Uber' action = {() => {
                        setTextInput('Uber')
                        addText()
                    }}/>
                    <CircleButton title='Weather' action = {() => {
                        setTextInput('Weather')
                        addText()
                    }}/>
                    <CircleButton title='News' action = {() => {
                        setTextInput('News')
                        addText()
                    }}/>
                </View> */}
                <View style={styles.textbox}>
                    <TextInputView onChange={setTextInput} margin={0} color='gray' focusColor='black' width='80%' />
                    <Button width='auto' backgroundColor='white' textColor='#4285f4' title='>' fontSize={50} action={addText} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title: {
        height: '7%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    chat: {
        height: '83%',
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15,
    },
    textboxContainer: {
        height: '10%',
        width: '100%',
        backgroundColor: 'white',
    },
    textbox: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    options: {
        height: '50%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        padding: 20
    }
});