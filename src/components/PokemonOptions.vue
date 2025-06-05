<template>
  <div class="options-container">
    <ul>
      <li v-for="{ id, name } in pokemons" :key="id">
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