<template>
  <div>
    <Contador title="Titulo 1" value="8"></Contador>
    <Contador title="Titulo 2" :value="5" />
    <Contador title="Titulo 3" v-bind:value="numero + 1" />
    <Contador title="Titulo 3" />
  </div>
</template>

<script>
import Contador from "@/components/Contador.vue";

export default {
  components: {
    Contador,
  },
  data() {
    return {
      numero: 20,
    };
  },
  methods: {
    metodo1() {
      console.log("Metodo ejecutado como prop");
    },
  },
};
</script>

<style>
</style>