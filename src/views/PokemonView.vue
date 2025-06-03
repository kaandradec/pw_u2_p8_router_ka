<template>
  <div class="pokemon-container">
    <h1>Selecciona el Pokemon correcto</h1>
    <PokemonImage :pokemonId="66" :mostrarImagen="true" />
    <pokemon-options />
    <!-- Vue pone un alias pokemon-options-->
  </div>
</template>
 
<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
};
</script>

<style>
</style>