import axios from 'axios';

const obtenerChiste = async () => {
  const response = await axios.get('https://api.chucknorris.io/jokes/random');
  return response.data;
};

export const obtenerChisteFachada = async () => await obtenerChiste();
