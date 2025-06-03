// Objetivo de componente: Mostrar una imagen
<template>
  <div>
    <img
      v-if="!mostrar"
      class="ocultar"
      :src="imagenFuente"
      alt="No se puede renderizar pokemon"
    />
    <img
      v-if="mostrar"
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
      mostrar: this.mostrarImagen,
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