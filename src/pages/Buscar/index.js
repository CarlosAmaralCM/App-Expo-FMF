import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 64;

export default function Buscar() {
  const [selectedTab, setSelectedTab]=useState(0);
  return (    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
          <View style={styles.subHeader}>
            <View style={styles.switch}>
              <TouchableOpacity style={{width: '50%',
              height: 30,
              backgroundColor: selectedTab == 0 ? '#FF7A00' : '#E9E8E8',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center'}}
              onPress={() => {
                setSelectedTab(0);
              }}> 
                <Text style={styles.subCent}> Nova Pesquisa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '50%',
              height: 30,
              backgroundColor: selectedTab == 1 ? '#FF7A00' : '#E9E8E8',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center'}}
              onPress={() => {
                setSelectedTab(1);
              }}>
                <Text style={styles.subCent}> Últimas pesquisas</Text>
              </TouchableOpacity>                
            </View>
          </View>
        </View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Em qual lugar?</Text>
             <TextInput style={styles.imput}> </TextInput>
             
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Qual tipo?</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Quartos</Text>
            
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Banheiros</Text>
            
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Área</Text>
            
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Data de públicação</Text>
            
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subCent}>Tipo de anunciante</Text>
            
          </View>
        </View>
        <View style={styles.divider}></View>
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
    color: '#FFFFFF',
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
    width:'80%',
    height: 35,
    borderWidth: 0.5,
    backgroundColor: '#E9E8E8',
    borderRadius: 15,
    flexDirection:'row',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 3,    
  },
  div:{
    backgroundColor: '#043B74',
    paddingTop: 15,
    paddingLeft: 40,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  divider:{
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16
  },
  imput:{
    flex:1,
    width:'90%',
    height: 40,
    borderRadius: 5,
  }
});