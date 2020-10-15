import axios from 'axios';

//criando config do azios
const api = axios.create({
  //todas as requisicoes partiram deste endereco
  baseURL: 'https://api.github.com',
});

export default api;