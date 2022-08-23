import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Button title="Button" onPress={() => {
                navigation.navigate('Detail', {
                    name: 'Alan',
                    valor: 10,
                    msg: 'Esse dado veio de outra pagina'
                })
            }} />
        </View>
    )
}

function DetailsScreen({ route }) {
    const { name, valor, msg } = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail {name}</Text>
            <Text>Detail {valor}</Text>
            <Text>Detail {msg}</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator()

//roteador
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{
                    title: "Pagina principal",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: 'orange'
                    },
                    headerTintColor: "red",
                }} component={HomeScreen} />
                <Stack.Screen name="Detail"
                    options={{
                        headerTitle: () => (
                            <Button title="Button" onPress={() => {
                                navigation.navigate('Detail', {
                                    name: 'Alan',
                                    valor: 10,
                                    msg: 'Esse dado veio de outra pagina'
                                })
                            }} />
                        ),
                        headerRight: () => (
                            <Button title="Button" onPress={() => {
                                navigation.navigate('Detail', {
                                    name: 'Alan',
                                    valor: 10,
                                    msg: 'Esse dado veio de outra pagina'
                                })
                            }} />
                        )
                    }}
                    component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}