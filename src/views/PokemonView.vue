<template>
  <div class="pokemon-container">
    <h1>Selecciona el Pokemon correcto</h1>
    <h1>{{ mensaje }}</h1>
    <PokemonImage
      v-if="pokemon"
      :pokemonId="pokemon.id"
      :mostrarImagen="mostrar"
      ref="miHijo1"
    />
    <pokemon-options
      @seleccionado="recibioPadre($event)"
      :pokemons="vectorPokemon"
      ref="miHijo2"
    />
    <!-- Vue pone un alias pokemon-options-->
    <button @click="comunicarHijo()">Comunicar Hijo</button>
  </div>
</template>
 
<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import {
  obtenerOpcionesFachada,
  obtenerAleatorioFachada,
} from "@/clients/PokemonClient";

export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
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

      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      );
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
    },

    recibioPadre(opcion) {
      console.log("Mensaje recibido desde Hijo");
      console.log("Id Recibido: ", opcion);
      this.mostrar = true;

      this.validarRespuesta(opcion);
    },
    validarRespuesta(opcionSeleccionada) {
      if (opcionSeleccionada.atributo1 === this.pokemon.id) {
        this.mensaje = "Correcto";
      } else {
        this.mensaje = `Perdiste, el pokemon correcto es: ${this.pokemon.name}`;
      }
    },
    comunicarHijo() {
      // Con ref podemos llamar a propiedades reactivas y métodos del hijo.
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";
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