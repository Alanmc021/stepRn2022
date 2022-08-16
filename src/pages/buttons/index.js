import React from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlight  } from 'react-native'
import styles from './styles'

export default function App() {

    function getDataBaseId() {
        alert("Funciondo")
    }

    return (
        <View style={styles.container}>
            <Text onPress={()=>{getDataBaseId() }}>Funcionado</Text>
            <Button title="Meu primeiro botao" onPress={() => { getDataBaseId() }} />
            
            <TouchableOpacity  onPress={() => { getDataBaseId() }} >
                <Text>Meu TouchableOpacity</Text>
            </TouchableOpacity>

            <TouchableHighlight  onPress={getDataBaseId} >
                <Text>Meu TouchableHighlight</Text>
            </TouchableHighlight> 
        </View>
    )
}