import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../../components/Header'

export default function Home() {
  return (
    <ScrollView  style={styles.container}>
      <View>
          <Header>
          </Header>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.content}>
          <View style={styles.subContent}/>
        </View>
      </View>
      
      <View style={styles.subContainer}>
        <View style={styles.content}>
          <View style={styles.subContent}/>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.content}>
          <View style={styles.subContent}/>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.content}>
          <View style={styles.subContent}/>
        </View>
      </View>
    </ScrollView>
   
 
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
    //fontWeight: 'bold',
    color: '#A6A6A6'
  },
  subContainer: {
    alignSelf:'center',
    flex:1,
    width: '100%',
    height: 500,
    marginBottom: 15,
    backgroundColor: '#043B74',
    alignItems:' center',
    justifyContent: 'center',
  },
  subContent: {
    borderRadius: 25,
    width: '100%',
    height: 250,
    backgroundColor:'#FFFFFF'    
  },
  content: {
    borderRadius: 25,
    width: '100%',
    height: 500,
    backgroundColor:'#FF7A00'
  },

});