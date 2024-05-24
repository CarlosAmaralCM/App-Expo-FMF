import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import Home from './pages/Home'
import Buscar from './pages/Buscar'
import Anunciar from './pages/Anunciar'
import Mensagem from './pages/Mensagem'
import Conta from './pages/Conta'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'
import Registro from './pages/Registro'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (                       
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor:'#FF7A00',
                    borderTopWidth: 0,
                    borderRadius: 5,
                    height: 55,                                                          
                }
            }}>
            <Tab.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        tabBarIcon: ({color, size, focused}) => {
                            if(focused){
                                return <Ionicons name='home' size={size} color='#FFFFFF' />
                            }
                                return <Ionicons name='home-outline' size={size} color='#FFFFFF' />

                        }
                    }}
                /> 
                <Tab.Screen
                    name="Buscar"
                    component={Buscar}
                    options={{
                        tabBarIcon: ({color, size, focused}) => {
                            if(focused){
                                return <Ionicons name='search' size={size} color='#FFFFFF' />
                            }
                                return <Ionicons name='search-outline' size={size} color='#FFFFFF' />

                        }
                    }}
                />       
                <Tab.Screen
                    name="Anunciar"
                    component={Anunciar}
                    options={{
                        tabBarIcon: ({color, size, focused}) => {
                            if(focused){
                                return <AntDesign name='pluscircle' size={size} color='#FFFFFF' />
                            }
                                return <AntDesign name='pluscircleo' size={size} color='#FFFFFF' />

                        }
                    }}

                    
                /> 
                <Tab.Screen
                    name="Mensagem"
                    component={Mensagem}
                    options={{
                        tabBarIcon: ({color, size, focused}) => {
                            if(focused){
                                return <Ionicons name='chatbubble-ellipses' size={size} color='#FFFFFF' />
                            }
                                return <Ionicons name='chatbubble-ellipses-outline' size={size} color='#FFFFFF' />

                        }
                    }}
                /> 
                <Tab.Screen
                    name="Conta"
                    component={Conta}
                    options={{
                        tabBarIcon: ({color, size, focused}) => {
                            if(focused){
                                return <FontAwesome name='user-circle-o' size={size} color='#FFFFFF' />
                            }
                                return <FontAwesome name='user-circle' size={size} color='#FFFFFF' />

                        }
                    }}
                />      
                <Tab.Screen
                    name="Registro"
                    component={Registro}
                    options={{
                        tabBarButton: (props) => null
                    }}
                />      
            </Tab.Navigator>
    )
  }
