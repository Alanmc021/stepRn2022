import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

export default function App({ numero, name, minhaFuncao }) {
    return (
        <View style={styles.container}>
            <Text>{numero}</Text>
            <Text>{name}</Text>
            <Button title="Ativar Funcao" onPress={() => { minhaFuncao() }}></Button>
        </View>
    )
}