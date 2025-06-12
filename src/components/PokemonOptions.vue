<template>
  <div class="options-container">
    <span>{{ mensaje2 }}</span>
    <ul>
      <li
        @click="comunicarClick(id, name)"
        v-for="{ id, name } in pokemons"
        :key="id"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mensaje2: "mensaje 2",
    };
  },
  methods: {
    comunicarClick(id, name) {
      console.log("Click");
      console.log(id);
      // Desde cualquier parte (no necesariamnte un método), puedo llamar a una funcion conocida como emit
      // @params (nombre_del_evento, ...datos_a_enviar)
      const objetoEnviado = {
        atributo1: id,
        atributo2: name,
        atributo3: true,
      };
      this.$emit("seleccionado", objetoEnviado);
    },
  },
};
</script>

<style scoped>
.options-container {
  display: flex;
  justify-content: center;
}
ul {
  list-style-type: none;
}

li {
  background: whitesmoke;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 12px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>