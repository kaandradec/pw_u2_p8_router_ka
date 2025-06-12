// Objetivo de componente: Mostrar una imagen
<template>
  <span style="z-index: 2; color: red">{{ mensaje1 }}</span>
  <div>
    <img
      v-if="!mostrarImagen"
      class="ocultar"
      :src="imagenFuente"
      alt="No se puede renderizar pokemon"
    />
    <img
      v-if="mostrarImagen"
      :src="imagenFuente"
      alt="No se puede renderizar pokemon"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarImagen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      mensaje1: "mensaje 1",
    };
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
div {
  height: 200px;
  display: flex;
  justify-content: center;
}
img {
  height: 200px;
  position: absolute;
  /*position:absolute -> posicionar una imagen sobre otra */
  /* right: 36%; */
}

.ocultar {
  filter: brightness(0);
}
</style>