import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function App() {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    function remove() {
        setCount(count - 1)
    }

    return (
        <View style={styles.container}>
            <Text>{count}</Text>

            <TouchableOpacity onPress={() => { add() }}>
                <Text>ADD</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={remove}>
                <Text>REMOVE</Text>
            </TouchableOpacity>
        </View>
    )
}