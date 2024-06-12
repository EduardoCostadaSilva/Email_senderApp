import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";

export default function RecuperarScreen() {
    const [email, setEmail] = useState("");

    function handleEmail() {
        dados = {
            email: email,
        };

        axios.post(
            'http://localhost:5000/send-email-recuperar-senha', dados
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

            navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Recuperar a senha</Text>
            <TextInput
                placeholder="digite o seu email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <Button
                onPress={handleEmail}
                title='receber código de recuperação'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: 'black',
        fontSize: 30,
        marginBottom: 50,
    },
    input: {
        border: "1px black solid",
        marginBottom: 5,
        borderRadius: 5,
    },
    prop: {
        color: 'purple'
    }
})
