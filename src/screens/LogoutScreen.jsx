import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function LogoutScreen({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleBoasvindas() {
        dados = {
            email: email,
            name: name,
          };
      
          axios.post(
            'http://localhost:5000/send-email-boasvi', dados
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
            <Text style={styles.titulo}>Registro</Text>
            <TextInput
                placeholder='Nome'
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
            />
            <Button
                onPress={handleBoasvindas}
                title='Entrar'
            />
            <Text>Já tem conta <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.prop}>entre já</TouchableOpacity> </Text>
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
    input : {
      border: "1px black solid",
      marginBottom: 5,
      borderRadius: 5,
    },
    prop : {
      color: 'purple'
  }
  });