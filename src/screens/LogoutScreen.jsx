import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function LogoutScreen({navigation}) {


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Logout</Text>
            <TextInput
                placeholder='Nome'
                style={styles.input}
            />
            <TextInput
                placeholder='Email'
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
            />
            <Button
                onPress={() => navigation.navigate('Login')}
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