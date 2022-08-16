import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'

export default function App() {

    const [name, setName] = React.useState("Alan")
    const [arr, setArr] = useState(DATA)
    const [boo, setBoo] = useState(true)
    const [nul, setNul] = useState(null)
    const [count , setCount] = useState(0)

    //1
    //2
    //3
    useEffect(() => {
        setName("Digite  seu nome")
        setTimeout(() => {
            alert("Iniciando o app")
        }, 5000)
    }, [])

    useEffect(() => {
        console.log(`estado: ${name}`)
    }, [name])

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <TouchableOpacity onPress={() => { setName("Igor") }}>
                <Text>Mudar de nome</Text>
            </TouchableOpacity>
            <TextInput
                style={{ height: 45, width: 200, backgroundColor: 'gray' }}
                onChangeText={setName}
                value={name}
            />
            {console.log(arr.map((el) => {
                console.log(el)
            }))}
        </View>
    )
}

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
];


