import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                placeholder='Email'
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
            />
            <Button
                onPress={() => navigation.navigate('Home')}
                title='Entrar'
            />
            <Text>Não tem conta <TouchableOpacity onPress={() => navigation.navigate('Logout')} style={styles.prop}>entre já</TouchableOpacity> </Text>
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