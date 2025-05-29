<template>
  <div class="container">
    <div class="chiste-container">
      <h1>Chiste Aleatorio de Chuck Norris</h1>
      <button @click="cargarChiste">Obtener Chiste</button>
      <img v-if="imagenUrl" :src="imagenUrl" alt="Chuck Norris" />
      <div class="texto-container">
        <p v-for="(parte, index) in partesMostradas" :key="index">
          {{ parte }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerChisteFachada } from "@/clients/ChuckNorrisClient";

export default {
  data() {
    return {
      chisteCompleto: "",
      partesChiste: [],
      partesMostradas: [],
      imagenUrl: null,
      indiceParte: 0,
      intervalo: null,
    };
  },
  methods: {
    async cargarChiste() {
      // Limpiar cualquier intervalo anterior
      if (this.intervalo) {
        clearInterval(this.intervalo);
        // clearInterval(this.intervalo); se utiliza para detener el temporizador que se ha iniciado con setInterval.
        //Usado si vuelves se vuelve a cargar un chiste (haciendo clic en el botón), se puede terminar con varios intervalos ejecutándose al mismo tiempo.
        this.intervalo = null;
      }

      const resultado = await obtenerChisteFachada();
      this.chisteCompleto = resultado.value;
      this.imagenUrl = resultado.icon_url;
      // Dividir por puntos y comas, incluyendo el signo al final de cada parte
      this.partesChiste = this.chisteCompleto.split(/(?<=[.,])/);
      this.partesMostradas = [];
      this.indiceParte = 0;

      // Mostrar cada parte en un nuevo párrafo cada 1.5 segundos
      this.intervalo = setInterval(() => {
        if (this.indiceParte < this.partesChiste.length) {
          this.partesMostradas.push(this.partesChiste[this.indiceParte].trim());
          this.indiceParte++;
        } else {
          clearInterval(this.intervalo);
          this.intervalo = null;
        }
      }, 1500);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

.chiste-container {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

button {
  display: block;
  margin: 0 auto 20px;
  padding: 10px 20px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #cc5200;
}

img {
  display: block;
  margin: 0 auto 20px;
  width: 100px;
  height: auto;
  border-radius: 50%;
}

.texto-container p {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin: 10px 0;
}
</style>
