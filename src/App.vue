<template>
  <div id="app">
    <div class="container mt-5 pt-5">
      <header>
        <b-row align-h="between">
          <b-col cols="6">
            <router-link :to="{ name: 'home' }">
              <img src="./assets/logo.png" alt="Logo" class="logo">
            </router-link>
          </b-col>
          <b-col cols="6">
            <b-row align-h="end" align-v="start">
              <a href>
                <img src="./assets/esp.png" alt="Español" class="band">
              </a>
              <a href>
                <img src="./assets/eng.png" alt="English" class="band">
              </a>
            </b-row>
          </b-col>
        </b-row>
      </header>
      <NavBar></NavBar>
      <Cuerpo class="py-2"></Cuerpo>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Cuerpo from "./components/Cuerpo";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    NavBar,
    Cuerpo,
    Footer
  }
};
</script>

<style>
.logo {
  max-width: 250px;
}
.band {
  max-width: 50px;
  padding: 3px;
}
header {
  padding-bottom: 30px;
}
</style>
