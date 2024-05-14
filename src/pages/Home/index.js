import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from '../../components/Header'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Home() {
  const [selectedTab, setSelectedTab]=useState(0);
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <View style={styles.switch}>
            <TouchableOpacity style={{width: '50%',
            height: 30,
            backgroundColor: selectedTab == 0 ? '#FF7A00' : 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'}}
            onPress={() => {
              setSelectedTab(0);
            }}> 
              <Text style={styles.subCent}> Lista</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '50%',
            height: 30,
            backgroundColor: selectedTab == 1 ? '#FF7A00' : 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'}}
            onPress={() => {
              setSelectedTab(1);
            }}>
              <Text style={styles.subCent}> Mapa</Text>
            </TouchableOpacity>
          </View>
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
    fontWeight: 'bold',
    color: '#A6A6A6'
  },
  subContainer: {
    paddingTop: 10,
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
  switch:{
    width:'30%',
    height: 35,
    borderWidth: 0.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection:'row',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 3,
    
  },
  /*touch1:{
    width: '50%',
    height: 60,
    backgroundColor: selectedTab == 0 ? 'blue' : 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch2:{
    width: '50%',
    height: 60,
    backgroundColor: selectedTab == 1 ? 'white' : 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }, */

});