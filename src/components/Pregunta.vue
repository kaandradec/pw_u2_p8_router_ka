<template>
  <div class="container">
    <!-- <img
      src="https://yesno.wtf/assets/no/19-2062f4c91189b1f88a9e809c10a5b0f0.gif
 "
      alt="No se pudo cargar"
    /> -->
    <img v-if="imagen" :src="imagen" alt="No hubo ese placeholder" srcset="" />

    <div class="container-2"></div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con un signo de pregunta (?)</p>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import { consultarFachada } from "@/clients/YesNoClient";

export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: null,
    };
  },
  watch: {
    // Método con el mismo nombre de la propiedad reactiva
    pregunta(value, oldValue) {
      // console.log(`Valor actual: ${value}\n Valor anterior: ${oldValue}`);

      this.esValida = false;

      if (value.endsWith("?")) {
        console.log("Actual: " + value);
        console.log("Old: " + oldValue);
        console.log(this.consumirAPI());
      }
    },
  },

  methods: {
    async consumirAPI() {
      const resp = await consultarFachada();

      console.log(resp);
      console.log(resp.image);
      console.log(resp.test);
      console.log(resp.forced);
      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
};
</script>

<style scoped>
.container-2,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  /* position: fixed; */
  left: 0px;
  top: 0px;
}

.container-2 {
  background-color: rgba(0, 0, 0, 0.5);
}

.pregunta-container {
  position: relative;
  /* relative: independiente mente de los elmentos que estan en la pagina web simpre los pone en la primera posicion */
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  margin-top: 72px;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 25px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 250px;
}
</style>