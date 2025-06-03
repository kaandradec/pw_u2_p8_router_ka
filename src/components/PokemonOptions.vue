<template>
  <div class="options-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
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