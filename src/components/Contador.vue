<template>
  <div class="container">
    <h1>{{ this.title }}</h1>

    <p>{{ 10 }}</p>
    <!-- Muestra el número literal 10 -->
    <p>{{ 1 + 1 }}</p>
    <!-- Evalúa y muestra 2 -->
    <p>
      {{ numero }}<sup>2</sup> = {{ calCuadrado }}
      <!-- Muestra el valor de “numero” al cuadrado usando la propiedad computada -->
    </p>

    <div>
      <button v-on:click="incrementar()">+1</button>
      <button v-on:click="decrementar()">-1</button>
    </div>

    <!--
      Ejemplos adicionales (descomentarlos para ver funcionando):
        <p>{{ activo }}</p>              Muestra true o false
        <p>{{ usuario.edad }}</p>         Accede a una propiedad de un objeto
        <p>{{ arreglo }}</p>              Muestra el contenido de un array
        <p>{{ true ? 'Es Verdadero' : 'Es Falso' }}</p>
        <p>{{ false ? 'Es Verdadero' : 'Es Falso' }}</p>
    -->
  </div>
</template>

<script>
import { ref, computed, reactive, onMounted } from "vue";
export default {
  // Función data(): define el estado reactivo del componente

  // FORMA 1
  // props: ["title", "value"],
  //FORMA 2
  props: {
    title: String,
    // value: Number,
    value: {
      // Podemos ser mas específicos en la descripción del prop
      type: Number,
      required: false,
      default: 100, // Cuando required == false podemos definir un valor por defecto
      validator(value) {
        // Por cada prop podemos crear una validación personalizada
        return value > 0;
      },
    },
    p1: Boolean,
    p2: Array,
    p3: Object,
    p4: Function,
    p5: Date,
    p6: Symbol, //Usado para enviar tokens
  },

  data() {
    return {
      numero: this.value, // Valor inicial del contador
      texto: "Kevin Andrade", // Ejemplo de dato tipo string
      titulo: "Contador",
      activo: true, // Ejemplo de dato booleano
      usuario: {
        // Objeto anidado con varias propiedades
        nombre: "Kevin",
        edad: 25,
        profesion: "Estudiante",
      },
      arreglo: ["Azul"], // Ejemplo de array en el estado
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Entró al método calcularCuadrado");
      // Retorna el cuadrado de “numero” (sin cachear)
      return this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  // Computed: propiedades computadas con cache
  computed: {
    calCuadrado() {
      console.log("Entró a la propiedad computada calCuadrado");
      // Solo se recalcula cuando “numero” cambie; resultado cacheado
      return this.numero * this.numero;
    },
  },
  created() {
    if (this.value > 0) console.log("Es correcto");
    else throw new Error("Error: El valor no puede ser menor que cero '0'");
  },
};
</script>

<style scoped>
h1 {
  color: rgb(128, 235, 128);
  background: rgb(83, 83, 238);
}

p {
  background: rgb(236, 236, 117);
}
</style>
