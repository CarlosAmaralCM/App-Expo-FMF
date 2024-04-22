import React, { useState }from "react";
import {View,StyleSheet,Text,StatusBar, Switch} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 45 : 64;


export default function Header(){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        
            <View style={styles.container}>
                <Text> HEADER IMPORTADO</Text>
            </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#043B74',
        paddingTop: statusBarHeight,
        //alignItems: 'center',
        //justifyContent: 'center'

    },
    switch:{
        alignItems:'center',
        justifyContent:'center',       

    }
    
})