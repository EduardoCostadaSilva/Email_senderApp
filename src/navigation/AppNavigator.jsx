import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../screens/LoginScreen";
import LogoutScreen from "../screens/LogoutScreen";
import HomeScreen from "../screens/HomeScreen";
import RecuperarScreen from "../screens/RecuperarScreen";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Drawer.Screen name='Logout' component={LogoutScreen} options={{ headerShown: false }} />
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Recuperar' component={RecuperarScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}