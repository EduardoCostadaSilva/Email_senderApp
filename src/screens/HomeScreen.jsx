import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import { useState } from "react";

export default function HomeScreen({navigation}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] =  useState("");

  function handleMensagem() {
    dados = {
      name: name,
      email: email, 
      message: mensagem
    };

    axios.post(
      'http://localhost:5000/send-email-contact', dados
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Email</Text>
      <TextInput 
      placeholder='Nome'
      value={name}
      onChangeText={setName}
      style={styles.input}
      />
      <TextInput 
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      style={styles.input}
      />
      <TextInput 
      placeholder='Mensagem'
      value={mensagem}
      onChangeText={setMensagem}
      multiline
      style={styles.input}
      />
      <Button
      onPress={handleMensagem}
      title='enviar email'
      />
    </View>
  );
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
    }
  });