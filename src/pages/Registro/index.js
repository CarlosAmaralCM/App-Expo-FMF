import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Registro({navigation}) {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.div}>
            <TouchableOpacity
              style={styles.inputButtom}
              onPress={() => navigation.jumpTo('Conta')}
              >
              <Text style={styles.nameButtomInput}> já sou cadastrado </Text>
            </TouchableOpacity>
            
          </View>
        </View>
        
    </View> 
   
    );   
  }
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#043B74',
      //alignItems: 'center',
      justifyContent: 'flex-end',
      //paddingTop: 100,
    },
    subContainer: {
      paddingTop: 10,
      width: '100%',
      height: 500,
      marginBottom: 15,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 100,
      alignItems: 'center',
      
    },
    div: {
      //backgroundColor:'#D63636',
      width: '100%',
      paddingLeft: '15%',
      paddingTop: 6
    },
    nameCent: {
      paddingTop: 50,
      fontSize: 64,
      fontWeight: 'bold',
      textAlign:'center',
      color: '#4D4C4C',
    },
    subCent: {
      fontSize:14,
      fontWeight: 'bold',
      textAlign:'center',
      color: '#4D4C4C',
    },
    input: {
      width: '80%',
      height: 60,
      backgroundColor: '#BFBFBF',
      borderRadius: 30,
      fontSize: 20,
      paddingLeft: 30,      
      //textAlign:'center',
      //fontWeight: 'bold',
    },
    titleInput: {
      paddingLeft: 10,
    },
    nameButtomInput: {
      paddingTop: 10,     
      fontSize: 20,
      color: '#FFFFFF'
    },
    inputButtom: {
      width: '85%',
      height: 50,
      backgroundColor: '#FF7A00',
      borderRadius: 15,
      alignItems: 'center',
      

    }
    
    
  })