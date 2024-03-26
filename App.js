import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/Home'
import Login from './src/Login';
import ExibirEvento from './src/ExibirEvento';
import CriarEvento from './src/CriarEvento';
import Networking from './src/Networking';
import { useEffect, useState } from 'react';
import UserProvider from './src/Context/UserContext';

const Tab = createBottomTabNavigator();

export default function App() {

  const [logado, setLogado] = useState(false)

  async function verificaUsuario() {
    const usuario = await AsyncStorage.getItem("usuario");

    if (usuario) {
      setLogado(true);
    }
  }

  useEffect(() => {
    verificaUsuario();
  }, []);

  if (logado == false) {
    return (<Login setlogado={setLogado} />)
  }

  return (
    <UserProvider>


      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <Ionicons
                    name='home'
                    size={24}
                    color={tabInfo.focused ? "#52056C" : "#8e8e93"}
                  />
                )
              }
            }}
          />
          <Tab.Screen name="Networking" component={Networking}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <MaterialCommunityIcons
                    name='account-network'
                    size={24}
                    color={tabInfo.focused ? "#52056C" : "#8e8e93"}
                  />
                )
              }
            }}
          />
          <Tab.Screen name="Criar evento" component={CriarEvento}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <AntDesign
                    name='pluscircleo'
                    size={24}
                    color={tabInfo.focused ? "#52056C" : "#8e8e93"}
                  />
                )
              }
            }}
          />
          <Tab.Screen name="Exibir Evento" component={ExibirEvento}
            options={{
              tabBarIcon: (tabInfo) => {
                return (
                  <AntDesign
                    name='calendar'
                    size={24}
                    color={tabInfo.focused ? "#52056C" : "#8e8e93"}
                  />
                )
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
