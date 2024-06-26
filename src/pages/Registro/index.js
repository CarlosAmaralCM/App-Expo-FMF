import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'
import { useState } from 'react';
import api from '../../services/api'
import storeUserData from '../../services/storage';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Registro({ navigation }) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const cadastro = () => {

    api.post("/api/auth/local/register",{ username:email, email:email, password:senha})
    .then(({data})=> {
      if (storeUserData(data.jwt)){
        navigation.jumpTo('Inicio')
      }
    })
    .catch((error) => {
      alert('ocorreu um erro ao registrar')
      console.log(error.response)
      console.error("erro", error)      
    }) 
   
  }
  
    return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.nameCent}> Criar nova conta</Text>
        <Text style={styles.subCent}>Já está registrado? Iniciar a sessão aqui</Text>
        <View style={styles.div}>
          <Text style={styles.titleInput}>NOME</Text>
          <TextInput
            style={styles.input}
            placeholder='Login'
            onChangeText={text=>setNome(text)}            
          /> 
        </View>
        <View style={styles.div}>
          <Text style={styles.titleInput}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={text=>setEmail(text)}                   
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
            onPress={()=>cadastro()}
          >
            <Text style={styles.nameButtomInput}> Inscrever-se </Text>
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
      height: 700,
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
      fontSize: 55,
      fontWeight: 'bold',
      textAlign:'center',
      color: '#FF7A00',
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