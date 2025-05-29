<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>

    <label for="id_nombre">Nombre: </label>
    <!-- v-model: Vincular una entrada a una propiedad reactiva  -->
    <!-- Usa el patrón  de diseño modelo vista controlador -->
    <!-- 
     Vista: Parte visual, 
     Modelo: (Propiedad reactiva) Lo que viaja entre la vista y controlador, 
     Controlador: El JS se encarga de modificar los valores
     -->
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <label for="id_edad">Edad: </label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />

    <label for="id_matriculado">Matriculado: </label>
    <input v-model="estaMatriculado" id="id_matriculado" type="checkbox" />

    <label for="id_promedio">Promedio Académico: </label>
    <input v-model="nuevoPromedioAcademico" id="id_promedio" type="number" />

    <button v-on:click="agregarEstudiante()">Agregar</button>

    <table>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Matriculado</th>
        <th>Promedio Académico</th>
        <th>Acción</th>
      </thead>
      <tbody>
        <tr
          v-for="{
            nombre,
            apellido,
            edad,
            matriculado,
            promedioAcademico,
          } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ matriculado ? "Si" : "No" }}</td>
          <td>{{ promedioAcademico }}</td>
          <td><button>Ver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "Nuevo",
      nuevoApellido: "Nuevo Apellido",
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
      mostrar: false,
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevoEst = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        matriculado: this.estaMatriculado,
        promedioAcademico: this.nuevoPromedioAcademico,
      };
      //   this.lista.unshift(nuevoEst);
      this.lista.push(nuevoEst);

      this.mostrar = true;
      this.nombre = null;

      setTimeout(() => {
        this.mostrar = false;
      }, 1500);
    },
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

table {
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 auto;
  background-color: azure;
  border-spacing: 0;
  overflow: hidden;

  margin-top: 48px;
}

th {
  border-bottom: 1px solid black;
  background-color: rgb(121, 197, 197);
}

td > button {
  width: fit-content;
  background-color: bisque;
}

tbody tr:hover {
  background-color: #eef3f9;
}

td,
th {
  padding: 4px 8px;
}

/* table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
  background-color: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}
 
thead {
  background-color: #f4f6f8;
}
 
thead th {
  text-align: left;
  padding: 15px;
  color: #333;
  font-weight: 600;
  border-bottom: 2px solid #e3e6ea;
}
 
tbody tr {
  transition: background-color 0.2s;
}
 
tbody tr:nth-child(even) {
  background-color: #f9fafb;
}
 
tbody tr:hover {
  background-color: #eef3f9;
}
 
tbody td {
  padding: 15px;
  border-bottom: 1px solid #e3e6ea;
  color: #444;
} */
</style>