import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//teste
const api = axios.create({
  //baseURL: 'http://172.16.4.100:1337'
  baseURL: 'http://177.10.100.195:8080'
});
/*
api.interceptors.request.use(async function (request) {
  if (!['/login', '/users/register'].includes(request.url)) {
    try {
      const token = await AsyncStorage.getItem('token')
      request.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.log('Erro ao ler o token')
      console.log(e)
    }
  }

  return request;
}, function (error) {
  return Promise.reject(error);
});
*/
export default api;
