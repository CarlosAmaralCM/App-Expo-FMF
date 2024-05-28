import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Anunciar() {

  const [image, setImage] = useState('')

  const ImagePickerPress = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality:1,
    })
    if (!result.canceled){
      setImage(result.assets[0].uri)      
    }
  }
    return (
    <View style={styles.container}>
      { image && <Image source={{uri: image }} style={styles.pickImg}/> }
      <View style={styles.header}>
        <Text style={styles.nameCent}>Anunciar imóvel</Text>
      </View>
      <View style={styles.divImg}>
        <TouchableOpacity style={styles.ButtonImg} onPress={ImagePickerPress}>
          <Text style={styles.subCent}> Incluir Fotos</Text>
        </TouchableOpacity>
      </View>
        <View>
          <Text style={styles.textTitle}> Titulo de anúncio</Text>
          <TextInput style={styles.divTitle}> </TextInput>
        </View>
        
    </View> 
   
    );   
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#043B74',
      //alignItems: 'center',
      //justifyContent: 'center',
      //paddingTop: 100,
    },
    header:{
      backgroundColor: '#043B74',
      paddingTop: statusBarHeight,
      //alignItems: 'center',
      //justifyContent: 'center'
    },
    nameCent: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign:'center',
      color: '#FFFFFF',
    },
    subCent: {
      fontSize:18,
      fontWeight: 'bold',
      color: '#A6A6A6',
    },
    divImg:{
      backgroundColor:'#FFFFFF',
      paddingTop:10,
      marginBottom:10,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      height: 150,
      width: '80%',
      borderRadius: 19
    },
    ButtonImg:{
      paddingTop:10,
      marginBottom:10,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      height: 150,
      width: '100%',
      borderRadius: 19
    },
    divTitle:{
      backgroundColor: '#FFFFFF',
      marginTop: 5,
      height: 40,
      width: '80%',
      alignSelf:'center',
      borderRadius: 10,
      justifyContent:'center',
    },
    textTitle:{
      marginTop:10,
      marginLeft: 40,
      //marginBottom:-10,
      fontSize: 18,
      fontWeight:'bold',
      color: '#FFFFFF',
      //backgroundColor: '#FFFFFF',
      height: 25,
      width: '40%',
    },
    pickImg:{
      //paddingTop:300,
      width:'70%',
      height: 300,
      marginTop:100,
      marginLeft: 50,
      borderRadius: 500
    }
  });