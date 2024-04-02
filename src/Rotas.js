import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from './Home'
import Perfil from './Perfil';
import Login from './Login';
import CriarEvento from './CriarEvento';
import Networking from './Networking';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

export default function Rotas() {

    const {logado} = useContext(UserContext)

    if(logado == false) {
        return(<Login/>)
    }

    const Tab = createBottomTabNavigator();

    return (
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
                <Tab.Screen name="Exibir Evento" component={CriarEvento}
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
                <Tab.Screen name="Perfil" component={Perfil}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return (
                                <AntDesign
                                    name='user'
                                    size={24}
                                    color={tabInfo.focused ? "#52056C" : "#8e8e93"}
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
)
}

