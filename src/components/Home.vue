<template>
  <!-- <div class="d-flex"> -->
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
      <b-carousel
        id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide :img-src="require('../assets/portada/1.jpg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/portada/2.jpg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/portada/3.jpg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/portada/4.jpg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/portada/5.jpg')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/portada/6.jpg')"></b-carousel-slide>
      </b-carousel>
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
  </b-row>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
</style>
