import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
     return true
      //navigation.jumpTo('Inicio')
    } catch (error) {
      console.log('Erro ao salvar os dados')
      console.log(error)
    }
    return false
  }

  
export default storeUserData;