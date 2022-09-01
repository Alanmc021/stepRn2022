import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import firebase from '../../services/firebase';

export default function App() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function writeUserData(userId, name, email, imageUrl) {

        firebase.database().ref('users').set({
            username: name,
            email: email,
            profile_picture: imageUrl
        });
    }

    function read() {
        var starCountRef = firebase.database().ref('users');
        starCountRef.on('value', (snapshot) => {
            const email = snapshot.val().email;
            console.log(email);            
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
            <Button title="Criar no banco" onPress={() => { writeUserData("01", "Alan2", "email2", "imagemrul2") }} />
            <Button title="ler no banco" onPress={() => { read() }} />

        </View>
    )
}

