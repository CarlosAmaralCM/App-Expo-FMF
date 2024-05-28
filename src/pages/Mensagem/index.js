import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Header from '../../components/Header'

export default function Mensagem() {
    return (
      
      <View style={styles.container}>
        <Header></Header>
      <Text style={styles.nameCent}> Quarta pagina </Text>
      <Text style={styles.subCent}> TESTE TESTE TESTE</Text>
      </View> 
     
   
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      //alignItems: 'center',
      //justifyContent: 'center',
      //paddingTop: 230,
    },
    nameCent: {
      fontSize: 64,
      fontWeight: 'bold',
      textAlign:'center',
      color: '#FFFFFF',
    },
    subCent:{
      fontSize:14,
      //fontWeight: 'bold',
      color: '#A6A6A6'
    },
  });