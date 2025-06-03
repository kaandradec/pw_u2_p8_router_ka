import axios from "axios";

const consumirPokemon = async (id) => {
  const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
  console.log(response);
  return response;
}

// Funciones fachada

export const consumirPokemonFachada = async (id) => {
  return await consumirPokemon(id);
}

// export const consumirPokemonFachada2 = async (id) => (await consumirPokemon(id));
