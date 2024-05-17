import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Header from '../../components/Header'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Anunciar() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View>
            
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
      //justifyContent: 'center',
      //paddingTop: 100,
    },
    nameCent: {
      fontSize: 64,
      fontWeight: 'bold',
      textAlign:'center',
      color: '#A6A6A6',
    },
    subCent: {
      fontSize:14,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    header:{
      backgroundColor: '#043B74',
      paddingTop: statusBarHeight,
      //alignItems: 'center',
      //justifyContent: 'center'
    },
    subHeader:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });