import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'
import Header from '../../components/home/header'
import Body from '../../components/home/body'
import Footer from '../../components/home/footer'

export default function App() {

    function minhaFuncao(){
        alert("Teste")
    }

    return (
        <View style={styles.container}>
            {/* <Button onPress={()=>{alert("OK")}} title="Clik aqui" ></Button> */}
            <Header   name="Alan Martins" minhaFuncao={minhaFuncao} />
            <Body />
            <Footer/>
        </View>
    )
}