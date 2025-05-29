<template>
  <div class="container">
    <div class="formularioContainer">
      <h2>Nuevo Producto</h2>
      <!-- <label for="id_nombre">Nombre: </label> -->

      <p type="Nombre: ">
        <input v-model="nombre" type="text" id="id_nombre" />
      </p>

      <!-- <label for="id_codigo">Código: </label> -->
      <p type="Código: ">
        <input v-model="codigo" type="text" id="id_codigo" />
      </p>

      <!-- <label for="id_fecha_ela">Fecha de elaboración: </label> -->
      <p type="Fecha de elaboración: ">
        <input v-model="fechaElaboracion" type="date" id="id_fecha_ela" />
      </p>

      <!-- <label for="id_fecha_exp">Fecha de expiración: </label> -->
      <p type="Fecha de expiración: ">
        <input v-model="fechaExpiracion" type="date" id="id_fecha_exp" />
      </p>

      <!-- <label for="id_descuento">Aplica descuento: </label> -->
      <p type="Aplica descuento: ">
        <input v-model="aplicaDescuento" type="checkbox" id="id_descuento" />
      </p>

      <div class="mensaje">
        <p
          :class="{ error: esError, success: !esError }"
          v-show="mostrarMensaje"
        >
          {{ mensaje }}
        </p>
      </div>

      <button @click="agregar()">Guardar</button>
    </div>
    <div class="productosContainer">
      <h2>Productos:</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Elaborado</th>
            <th>Expira</th>
            <th>Aplica descuento</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{
              nombre,
              codigo,
              fechaElaboracion,
              fechaExpiracion,
              aplicaDescuento,
            } in productos"
            :key="codigo"
          >
            <td>{{ codigo }}</td>
            <td>{{ nombre }}</td>
            <td>{{ fechaElaboracion }}</td>
            <td>{{ fechaExpiracion }}</td>
            <td>{{ aplicaDescuento }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const productosPorDefecto = [
  {
    nombre: "Galletas saladas",
    codigo: "PR-001",
    fechaElaboracion: "2024-12-12",
    fechaExpiracion: new Date(2025, 12, 12).toISOString().split("T")[0],
    aplicaDescuento: true,
  },
  {
    nombre: "Yogurth de mora",
    codigo: "PR-002",
    fechaElaboracion: new Date(2024, 1, 3).toISOString().split("T")[0],
    fechaExpiracion: new Date(2025, 8, 4).toISOString().split("T")[0],
    aplicaDescuento: false,
  },
];

export default {
  data() {
    const hoy = new Date().toISOString().split("T")[0];
    return {
      nombre: "",
      codigo: "",
      fechaElaboracion: hoy,
      fechaExpiracion: hoy,
      aplicaDescuento: false,
      // lista
      productos: [...productosPorDefecto],
      mensaje: "",
      mostrarMensaje: false,
      esError: false,
    };
  },

  methods: {
    cargarMensaje(msg, esError = false) {
      this.mensaje = msg;
      this.esError = esError;
      this.mostrarMensaje = true;

      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 1500);
    },

    agregar() {
      if (!this.validarInputs()) {
        return;
      }

      const nuevoProducto = {
        nombre: this.nombre,
        codigo: this.codigo,
        fechaElaboracion: this.fechaElaboracion,
        fechaExpiracion: this.fechaExpiracion,
        aplicaDescuento: this.aplicaDescuento,
      };

      this.productos.push(nuevoProducto);

      this.cargarMensaje("Guardado Correctamente!");
      this.limpiarInputs();
    },

    validarInputs() {
      const fechaEla = new Date(this.fechaElaboracion);
      const fechaExp = new Date(this.fechaExpiracion);

      if (this.nombre === "") {
        this.cargarMensaje("El campo Nombre es obligatorio", true);
        return false;
      }
      if (this.codigo === "") {
        this.cargarMensaje("El campo Código es obligatorio", true);
        return false;
      }
      if (fechaEla >= fechaExp) {
        this.cargarMensaje(
          "La fecha de expiración no puede ocurrir antes que la fecha de elaboración.",
          true
        );
        return false;
      }

      return true;
    },

    limpiarInputs() {
      this.nombre = "";
      this.codigo = "";
      this.fechaElaboracion = new Date().toISOString().split("T")[0];
      this.fechaExpiracion = new Date().toISOString().split("T")[0];
      this.aplicaDescuento = false;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formularioContainer {
  width: 300px;

  background-color: whitesmoke;
  border-radius: 8px;
  padding: 16px 32px;
}

.formularioContainer > p:before {
  content: attr(type);
  display: block;
  color: black;
  text-align: start;
}

.formularioContainer > p > input {
  width: 100%;
}

.mensaje {
  /* border: 1px solid; */
  height: 32px;
}

.mensaje p {
  margin: 0;
  font-weight: bold;
  font-size: small;
  transition: color 0.3s ease;
}

.mensaje p.error {
  color: red;
}

.mensaje p.success {
  color: green;
}

.formularioContainer button {
  margin: 0 auto;
}

.productosContainer {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

.productosContainer h2 {
  text-align: start;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background-color: #f0f4f8;
  color: #333;
}

th,
td {
  padding: 12px 16px;
  text-align: left;
}

th {
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 2px solid #e0e6ed;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}

tr:hover {
  background-color: #eef2f7;
}

td {
  color: #555;
  border-bottom: 1px solid #e6e6e6;
  font-size: 0.93rem;
}
</style>