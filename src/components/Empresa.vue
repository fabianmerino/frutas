<template>
  <b-row>
    <b-col md="2" class="d-flex d-md-block pt-2 pt-md-1">
      <b-row
        align-content="between"
        align-v="center"
        align-h="between"
        class="justify-content-md-center w-100"
      >
        <router-link :to="{ name: 'uva' }" class="text-center">
          <b-img
            :src="require('../assets/exportacion.png')"
            fluid
            center
            alt="Exportación"
            width="80%"
          ></b-img>
          <h5>Exportacion</h5>
        </router-link>
        <router-link :to="{ name: 'mn-uva' }" class="text-center">
          <b-img
            :src="require('../assets/mercado.png')"
            fluid
            center
            alt="Mercado Nacional"
            class="logo"
            width="80%"
          ></b-img>
          <h5>Mercado Nacional</h5>
        </router-link>
        <router-link :to="{ name: 'empafrut' }" class="text-center">
          <b-img
            :src="require('../assets/empafrut.jpg')"
            fluid
            center
            alt="Empafrut"
            class="logo"
            width="80%"
          ></b-img>
          <h5>Empafrut</h5>
        </router-link>
      </b-row>
    </b-col>

    <b-col md="8">
      <b-img :src="require('../assets/fdp.jpg')" fluid-grow alt="Empresa"></b-img>
    </b-col>
    <b-col md="2" class="d-flex d-md-block pt-2 pt-md-1">
      <b-row align-content="between" align-h="between" class="justify-content-md-center w-100">
        <router-link :to="{ name: 'uva' }" class="text-center">
          <b-img
            :src="require('../assets/rina-kuskalla.jpg')"
            fluid
            center
            alt="Rina Kuskalla"
            width="80%"
            heigth="100%"
          ></b-img>
          <h5>Rina Kuskalla</h5>
        </router-link>
        <router-link :to="{ name: 'mn-uva' }" class="text-center">
          <b-img
            :src="require('../assets/sercofrut.jpg')"
            fluid
            center
            alt="Sercofrut"
            class="logo"
            width="80%"
            heigth="100%"
          ></b-img>
          <h5>Sercofrut</h5>
        </router-link>
        <router-link :to="{ name: 'empafrut' }" class="text-center">
          <b-img
            :src="require('../assets/imagenes.png')"
            fluid
            center
            alt="Fotos y Videos"
            class="logo"
            width="80%"
            heigth="100%"
          ></b-img>
          <h5>Fotos y Videos</h5>
        </router-link>
      </b-row>
    </b-col>
    <b-row>
      <b-col md="5" offset-md="2" class="px-4 px-md-0">
        <h2>FRUTAS DE PIURA</h2>
        <p class="text-justify">
          Frutas de Piura es una empresa ubicada en el norte del Perú, en la ciudad de Piura y creada por empresarios locales que desde hace 10 años se dedica a la producción, procesamiento y exportación de fruta que ellos mismos producen como Mango, Uva y Banano.
        </p>
        <p class="text-justify">
          Contamos con 800 ha de mango, 180 ha. de uva y 50 de banano que cumplen con las certificaciones internacionales como Global Gap, Tesco, Grasp, Smeta, field to fork y Costco.
        </p>
      </b-col>
      <b-col md="3">
        <p>Mapa</p>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "Empresa"
};
</script>

<style scoped>
</style>
