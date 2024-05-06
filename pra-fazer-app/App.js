import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import About from './src/screens/About/index'
import Tasks from './src/screens/Tasks/index'
import Account from './src/screens/Account/index'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" //Abri a página inicial
            screenOptions={{ //Aplica o estilo na barra de navegação
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#F60'},
                headerTintColor: '#FFF',
            }}
            > 

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" component={CreateUser} 
                options={{title: 'Cadastro de Usuário'}} />

                {/*<Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />*/}

                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Cria o menu do rodapé do aplicativo
function Tabs(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: "#FFF", //cOR DE ICONES ativos
            tabBarInactiveTintColor: "#F60", //cor de icones inativos 
            tabBarActiveBackgroundColor: "#F60",
            tabBarStyle: { backgroundColor: "#070a52" }, // Formata a cor de fundo da tab navigator
            headerTitleAlign: 'center', 
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#F60' }
        }} >
            <Tab.Screen name="Tasks" component={Tasks} 
            options={{
                title: 'Tarefas',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="check-bold" color={color} size={32} />
                ),
            }} />

            <Tab.Screen name="Account" component={Account} 
            options={{
                title: 'Usuário',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={32} />
                ),
            }} />

            <Tab.Screen name="About" component={About} 
            options={{
                title: 'Sobre',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="information-outline" color={color} size={32} />
                ),
            }} />
        </Tab.Navigator>
    );
}