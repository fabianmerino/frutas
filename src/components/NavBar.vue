<!--suppress ALL -->
<template>
  <b-navbar toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mx-auto">
        <b-nav-item :to="{ name: 'home' }">
          <i class="material-icons">home</i>
        </b-nav-item>

        <b-nav-item :to="{ name: 'empresa' }">Empresa</b-nav-item>

        <b-nav-item-dropdown text="Frutas">
          <b-dropdown-header>Exportación</b-dropdown-header>
          <b-dropdown-item :to="{ name: 'mango' }">Mango</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'uva' }">Uva</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'banano' }">Banano</b-dropdown-item>

          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-header>Mercado Nacional</b-dropdown-header>
          <b-dropdown-item :to="{ name: 'mn-mango' }">Mango</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'mn-uva' }">Uva</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'mn-banano' }">Banano</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'mn-melon' }">Melón</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Fundos">
          <b-dropdown-item :to="{ name: 'tungasuca-ci' }">Fundo Tungasuca Cieneguillo</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'tungasuca-ca' }">Fundo Tungasuca Carrasquillo</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'sanjuan' }">Fundo San Juan</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'staelisa' }">Fundo Santa Elisa</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'marialuisa' }">Fundo María Luisa</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'huapalas' }">Fundo Huapalas</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'rodricc' }">Fundo Rodricc</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'noni' }">Fundo La Noni</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'mangales' }">Fundo Los Mangales</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item :to="{ name: 'contacto' }">Contacto</b-nav-item>

        <b-nav-item :to="{ name: 'destinos' }">Destinos</b-nav-item>

        <b-nav-item-dropdown text="Tracking">
          <b-dropdown-item
            href="https://ecomm.one-line.com/ecom/CUP_HOM_3301.do"
            target="_blank"
          >ONE</b-dropdown-item>
          <b-dropdown-item
            href="http://www.maerskline.com/?page=page_tracking3_trackSimple"
            target="_blank"
          >MAERSK</b-dropdown-item>
          <b-dropdown-item
            href="https://ecom.hamburgsud.com/ecom/en/ecommerce_portal/track_trace/track__trace/ep_trackandtrace.xhtml?lang=EN"
            target="_blank"
          >HAMBURG SUD</b-dropdown-item>
          <b-dropdown-item
            href="http://www.apl.com/wps/portal/apl/etools/tracking"
            target="_blank"
          >APL</b-dropdown-item>
          <b-dropdown-item href="http://www.mscgva.ch/tracking/index.html" target="_blank">MSC</b-dropdown-item>
          <b-dropdown-item href="http://www2.nykline.com/" target="_blank">NYK</b-dropdown-item>
          <b-dropdown-item
            href="https://www.hapag-lloyd.com/es/tracing/by_container.html"
            target="_blank"
          >HAPAG-LLOYD</b-dropdown-item>
          <b-dropdown-item href="http://www.cma-cgm.com/ebusiness/tracking" target="_blank">CMA-CGM</b-dropdown-item>
          <b-dropdown-item href="http://www.dhl.com/en/express/tracking.shtml" target="_blank">DHL</b-dropdown-item>
          <b-dropdown-item
            href="http://www.tnt.com/webtracker/tracker.do?navigation=1&respLang=es&respCountry=es&genericSiteIdent="
            target="_blank"
          >TNT</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Enlaces">
          <b-dropdown-item href="http://www2.trabajo.gob.pe/" target="_blank">MINTRA</b-dropdown-item>
          <b-dropdown-item href="http://www.sercofrut.com/" target="_blank">Sercofrut</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar .dropdown-toggle,
.navbar .dropdown-menu a {
  cursor: pointer;
  color: #0b7046;
  font-weight: bolder;
}

.navbar .navbar-nav {
  background-color: #83bc00;
  border-radius: 5px;
}
</style>