import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserData = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
     return true

    } catch (error) {
      console.log('Erro ao salvar os dados')
      console.log(error)
    }
    return false
  }

  export const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      return token
    } catch (error) {
      console.log('erro ao recuperar o token')
      console.log(error)
    }
    return null
  }

  
export default storeUserData;