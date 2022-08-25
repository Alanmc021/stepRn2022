import React, { useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const AuthContext = React.createContext()

function SplashScreen() {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

function HomeScreen() {
    const { signOut } = React.useContext(AuthContext)
    return (
        <View>
            <Text>Loading...</Text>
            <Button title="deslogar" onPress={() => {signOut() }} />
        </View>
    )
}

function SignInScreen() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { signIn } = React.useContext(AuthContext)

    function login(username, password){
       
        if(username == "Alan" &&  password ==  123456){
            signIn(username,password)  
        }else{
            alert('Dados invalidos') 
        }
    }

    return (
        <View>
            <TextInput
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button title="Logar" onPress={() => {login(username, password) }} />
        </View>
    )
}

const Stack = createNativeStackNavigator()

export default function App() {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTOREN_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false
                    }
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token
                    }
                case 'SING_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null
                    }
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null
        }
    )

    const authContext = React.useMemo(() => ({
        signIn: async () => { dispatch({ type: 'SIGN_IN', token: '12345' }) },
        signOut: async () => { dispatch({ type: 'SING_OUT', token: '12345' }) }
        //signOut: async () => { dispatch({type:'SIGN_IN' , token:'12345'}) }
    }), [])

    //React.useEffect( ()=>{} , {})

    return (
        <AuthContext.Provider value={authContext}>
            < NavigationContainer>
                <Stack.Navigator>
                    {
                        false ?
                            <Stack.Screen name="Splash" component={SplashScreen} />
                            :
                            state.userToken == null ?
                                <Stack.Screen name="SignIn" component={SignInScreen} />
                                :
                                <Stack.Screen name="Home" component={HomeScreen} />
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

