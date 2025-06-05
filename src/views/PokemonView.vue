<template>
  <div class="pokemon-container">
    <h1>Selecciona el Pokemon correcto</h1>
    <PokemonImage :pokemonId="123" :mostrarImagen="true" />
    <pokemon-options :pokemons="vectorPokemon" />
    <!-- Vue pone un alias pokemon-options-->
  </div>
</template>
 
<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonClient";

export default {
  data() {
    return {
      vectorPokemon: [],
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon = opciones;

      console.log(this.vectorPokemon);
    },
  },
  // Todos los ciclos de vida estan excentos de ser async
  mounted() {
    // En este caso no es necesario usar async await
    this.iniciarJuego();
  },
};
</script>

<style>
</style>