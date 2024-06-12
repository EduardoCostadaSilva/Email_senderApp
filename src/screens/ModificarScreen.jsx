import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function ModificarSenha({navigation}) {

    const [email, setEmail] = useState("");

    function handleModSenha() {
            dados = {
                email: email,
            };
    
            axios.post(
                'http://localhost:5000/send-email-senha-modificada', dados
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
            <Text style={styles.titulo}>Modificar sua senha</Text>
            <TextInput
                placeholder="digite o seu email novamente"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="digite a senha enviada"
                style={styles.input}
            />
            <Button
                onPress={handleModSenha}
                title='Modificar senha'
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