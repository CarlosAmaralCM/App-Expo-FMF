import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
//import Header from '../../components/Header'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.image}
      />    
    <Text style={styles.nameCent}> AlugaLar </Text>
    <Text style={styles.subCent}> você muda, sua vida muda</Text>
    </View> 
 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#043B74',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: 230,
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius:10,
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
  image: {
    width: 100,
    height: 100,
  },
});



