import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'
import { useState } from 'react';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Conta({ navigation }) {
  
  const [nome,setNome] = useState('')
  const [senha,setSenha] = useState('')
  const storeUserData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
      navigation.jumpTo('Inicio')
    } catch (error) {
      console.log('Erro ao salvar os dados')
      console.log(error)
    }
  }

  const login = () => {
    api.post("/api/auth/local",{ identifier:nome, password:senha})
    .then(({data})=> {
      storeUserData(data.jwt)
    })
    .catch((error) => {
      alert('ocorreu um erro ao logar')
      console.log(error.response)
    }) 
    /*alert(nome);
    alert(senha);
    */
  }

    return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.nameCent}> ENTRAR</Text>
        <Text style={styles.subCent}>Iniciar sessão para continuar</Text>
        <View style={styles.div}>
          <Text style={styles.titleInput}>NOME</Text>
          <TextInput
            style={styles.input}
            placeholder='Login'
            onChangeText={text=>setNome(text)}            
          /> 
        </View>
        <View style={styles.div}>
          <Text style={styles.titleInput}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder='Senha'
            secureTextEntry={true}
            onChangeText={text=>setSenha(text)}
          />
        </View>
        <View style={styles.div}>
          <TouchableOpacity
            style={styles.inputButtom}
            onPress={() => login()}
          >
            <Text style={styles.nameButtomInput}> Iniciar sessão </Text>
          </TouchableOpacity>          
        </View>
        <View style={styles.div}>
        <TouchableOpacity
            style={styles.inputButtom}
            onPress={() => navigation.jumpTo('Registro')}
            >
            <Text style={styles.nameButtomInput}> Cadastre-se </Text>
          </TouchableOpacity>
        </View>
      </View>    
    </View> 
   
    );   
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    
    
  });