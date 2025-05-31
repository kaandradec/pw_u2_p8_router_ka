<template>
  <div class="container">
    <label for="id_nombre">Nombre: </label>
    <!-- v-model: Vincular una entrada a una propiedad reactiva  -->
    <!-- Usa el patrón  de diseño modelo vista controlador -->
    <!-- 
     Vista: Parte visual, 
     Modelo: (Propiedad reactiva) Lo que viaja entre la vista y controlador, 
     Controlador: El JS se encarga de modificar los valores
     -->
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <span v-if="mensaje.nombre">{{ mensaje.nombre }}</span>

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <span v-if="mensaje.apellido">{{ mensaje.nombre }}</span>

    <label for="id_edad">Edad: </label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />

    <label for="id_matriculado">Matriculado: </label>
    <input v-model="estaMatriculado" id="id_matriculado" type="checkbox" />

    <label for="id_promedio">Promedio Académico: </label>
    <input v-model="nuevoPromedioAcademico" id="id_promedio" type="number" />

    <button v-on:click="agregarEstudiante()">Agregar</button>

    <ul>
      <!-- v-for Directiva para y graficar componentes a partir de un arreglo o una lista -->
      <!-- <li v-for="estu in lista" :key="estu.nombre">
        Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}
      </li> -->

      <!-- Con desestructuración de objetos -->
      <li
        v-for="{
          nombre,
          apellido,
          edad,
          matriculado,
          promedioAcademico,
        } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        Matriculado: {{ matriculado ? "Sí" : "No" }} - Promedio Académico:
        {{ promedioAcademico }}
      </li>
    </ul>
    <Button @click="obtenerPathVariable()">Path Variable</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: null,
      nuevoApellido: null,
      nuevaEdad: 22,
      estaMatriculado: false,
      nuevoPromedioAcademico: 16.0,
      lista: [
        {
          nombre: "Kevin",
          apellido: "Andrade",
          edad: 22,
          matriculado: false,
          promedioAcademico: 16.86,
        },
        {
          nombre: "Daniel",
          apellido: "Vera",
          edad: 23,
          matriculado: true,
          promedioAcademico: 16.65,
        },
        {
          nombre: "Pedro",
          apellido: "Sanchez",
          edad: 26,
          matriculado: false,
          promedioAcademico: 15.0,
        },
        {
          nombre: "Jorge",
          apellido: "Teran",
          edad: 25,
          matriculado: false,
          promedioAcademico: 17.2,
        },
        {
          nombre: "Carlos",
          apellido: "Castillo",
          edad: 23,
          matriculado: true,
          promedioAcademico: 15.12,
        },
        {
          nombre: "Viviana",
          apellido: "Lopez",
          edad: 24,
          matriculado: false,
          promedioAcademico: 14.23,
        },
      ],
      mensaje: {
        nombre: null,
        apellido: null,
      },
    };
  },
  methods: {
    agregarEstudiante() {
      if (this.validarEntradas()) {
        const nuevoEst = {
          nombre: this.nuevoNombre,
          apellido: this.nuevoApellido,
          edad: this.nuevaEdad,
          matriculado: this.estaMatriculado,
          promedioAcademico: this.nuevoPromedioAcademico,
        };
        //   this.lista.unshift(nuevoEst);
        this.lista.push(nuevoEst);
      }
    },
    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log("CEDULA: ", cedula);

      const anio = this.$route.query.anio;
      const mes = this.$route.query.mes;

      console.log("Año: ", anio);
      console.log("Mes: ", mes);
    },
    validarEntradas() {
      if (this.nuevoNombre === null) {
        this.mensaje.nombre = "Nombre es obligatorio";
        return false;
      }

      if (this.nuevoApellido === null) {
        this.mensaje.apellido = "Apellido es obligatorio";
        return false;
      }

      return true;
    },
  },

  beforeCreate() {
    console.log("ETAPA: beforeCreate");
  },
  created() {
    console.log("ETAPA: created");
  },
  beforeMount() {
    console.log("ETAPA: beforeMount");
  },
  mounted() {
    console.log("ETAPA: mounted");
    //---
    const cedula = this.$route.params.cedula;
    console.log("CEDULA: ", cedula);

    const anio = this.$route.query.anio;
    const mes = this.$route.query.mes;

    console.log("Año: ", anio);
    console.log("Mes: ", mes);
  },
  // Antes de que se actualize
  beforeUpdate() {
    console.log("ETAPA: beforeUpdate");
  },
  updated() {
    console.log("ETAPA: updated");
  },
  beforeUnmount() {
    console.log("ETAPA: beforeUnmount");
  },
  unmounted() {
    console.log("ETAPA: unmounted");
  },
};
</script>

<style scoped>
/* .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
} */

.container {
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}

label {
  /* Display block: Ocupa el bloque completo horizontalmente */
  display: block;
  color: #333;
  text-align: left;
}

/* input[type="checkbox"]{
  display: inline;
} */

input {
  width: 95%;
  background-color: #4c91f9;
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 8px 14px;
}

button {
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 300px;
}

button:active {
  background-color: aliceblue;
}

ul {
  list-style: none;
  margin-top: 48px;
}

li {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: large;
  box-shadow: 0px 1px 2px;
}
</style>