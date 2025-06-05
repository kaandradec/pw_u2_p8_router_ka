import axios from "axios";

const consumirPokemon = async (id) => {
  const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
  console.log(response);
  return response;
}

const obtenerObjetoPokemon = async (numero) => {
  const data = await consumirPokemon(numero);
  console.log(data.name);
  const pokemon = {
    id: data.id,
    name: data.name,
  }

  return pokemon;
}

const obtenerArregloNumerico = (longitud) => {
  const vector = [];
  for (let index = 0; index < longitud; index++) {
    vector[index] = obtenerAleatorio(1, 600);
  }

  return vector;
}

function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

const obtenerArregloPokemon = async (arregloNumerico) => {
  const vector = [];

  for (let numero of arregloNumerico) {
    let objetoPokemon = await obtenerObjetoPokemon(numero);
    vector.push(objetoPokemon)
  }

  return vector;
}


const obtenerOpciones = async (longitud) => {
  const vector = obtenerArregloNumerico(longitud);
  const vectorObjetos = await obtenerArregloPokemon(vector);
  return vectorObjetos;
}

// Funciones fachada

export const consumirPokemonFachada = async (id) => {
  return await consumirPokemon(id);
}

export const obtenerOpcionesFachada = async (longitud) => {
  return await obtenerOpciones(longitud);
}

// export const consumirPokemonFachada2 = async (id) => (await consumirPokemon(id));
