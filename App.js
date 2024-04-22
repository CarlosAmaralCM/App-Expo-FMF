import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home'
import Buscar from './src/pages/Buscar'
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
//import Header from './src/components/Header';

export default function App() {
  return (
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
  );
}