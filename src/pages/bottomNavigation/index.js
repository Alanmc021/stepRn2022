import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs' 

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>           
        </View>
    )
}

function DetailsScreen( ) {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DetailsScreen</Text>
            
        </View>
    )
}

const Tab = createBottomTabNavigator()

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Details" component={DetailsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}