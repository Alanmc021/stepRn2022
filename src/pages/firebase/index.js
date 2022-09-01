import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import firebase from '../../services/firebase';

export default function App() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    // const { signIn } = React.useContext(AuthContext)

    function login(username, password) {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
            });
    }

    function logout() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    function createUser() {
        firebase.auth().createUserWithEmailAndPassword("alan@alam.com", "123456")
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                // ..
            });
    }

    return (
        <View style={styles.container}>
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
            <Button title="Logar" onPress={() => { login(username, password) }} />
            <Button title="deslogar" onPress={() => { logout() }} />
            <Button title="criar user" onPress={() => { createUser() }} />
        </View>
    )
}

