import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import LogoutScreen from "../screens/LogoutScreen";
import HomeScreen from "../screens/HomeScreen";
import RecuperarScreen from "../screens/RecuperarScreen";
import ModificarSenha from "../screens/ModificarScreen";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Drawer.Screen name='Logout' component={LogoutScreen} options={{ headerShown: false }} />
                <Drawer.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name='Recuperar' component={RecuperarScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name='Modificar' component={ModificarSenha} options={{ headerShown: false }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}