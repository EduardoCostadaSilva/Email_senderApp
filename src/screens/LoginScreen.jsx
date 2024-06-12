import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");


    function handleConfirm() {
        dados = {
            email: email,
          };
      
          axios.post(
            'http://localhost:5000/send-email-confirmacao', dados
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          
          navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
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
            <Text><TouchableOpacity onPress={() => navigation.navigate('Modificar')} style={styles.prop}>modificar a sua senha </TouchableOpacity> </Text>
            <Button
                onPress={handleConfirm}
                title='Entrar'
            />

            <Text>Não tem conta <TouchableOpacity onPress={() => navigation.navigate('Logout')} style={styles.prop}>crie já</TouchableOpacity> </Text>
            <Text>Esqueceu a senha <TouchableOpacity onPress={() => navigation.navigate('Recuperar')} style={styles.prop}>clique aqui</TouchableOpacity> </Text>
            
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