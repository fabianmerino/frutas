<template>
    <div class="cuerpo">
        <Home v-if="$route.name === 'home'"></Home>
        <!--Empresa-->
        <Empresa v-if="$route.name === 'empresa'"></Empresa>
        <!--Frutas-->
        <Mango v-if="$route.name === 'mango'"></Mango>
        <Uva v-if="$route.name === 'uva'"></Uva>
        <Banano v-if="$route.name === 'banano'"></Banano>
        <MangoMN v-if="$route.name === 'mn-mango'"></MangoMN>
        <UvaMN v-if="$route.name === 'mn-uva'"></UvaMN>
        <BananoMN v-if="$route.name === 'mn-banano'"></BananoMN>
        <MelonMN v-if="$route.name === 'mn-melon'"></MelonMN>
        <!--Fundos-->
        <TungasucaCi v-if="$route.name === 'tungasuca-ci'"></TungasucaCi>
        <TungasucaCa v-if="$route.name === 'tungasuca-ca'"></TungasucaCa>
        <SanJuan v-if="$route.name === 'sanjuan'"></SanJuan>
        <SantaElisa v-if="$route.name === 'staelisa'"></SantaElisa>
        <MariaLuisa v-if="$route.name === 'marialuisa'"></MariaLuisa>
        <Huapalas v-if="$route.name === 'huapalas'"></Huapalas>
        <Rodricc v-if="$route.name === 'rodricc'"></Rodricc>
        <Noni v-if="$route.name === 'noni'"></Noni>
        <Mangales v-if="$route.name === 'mangales'"></Mangales>
        <!--Contacto-->
        <Contacto v-if="$route.name === 'contacto'"></Contacto>
        <!--Destinos-->
        <Destinos v-if="$route.name === 'destinos'"></Destinos>
    </div>
</template>

<script>
    import Home from './Home'
    import Empresa from './Empresa'

    import Mango from './frutas/exportacion/Mango'
    import Uva from './frutas/exportacion/Uva'
    import Banano from './frutas/exportacion/Banano'
    import MangoMN from './frutas/mercado-nacional/MangoMN'
    import UvaMN from './frutas/mercado-nacional/UvaMN'
    import BananoMN from './frutas/mercado-nacional/BananoMN'
    import MelonMN from './frutas/mercado-nacional/MelonMN'

    import TungasucaCi from './fundos/TungasucaCi'
    import TungasucaCa from './fundos/TungasucaCa'
    import SanJuan from'./fundos/SanJuan'
    import SantaElisa from './fundos/SantaElisa'
    import MariaLuisa from './fundos/MariaLuisa'
    import Huapalas from './fundos/Huapalas'
    import Rodricc from './fundos/Rodricc'
    import Noni from './fundos/Noni'
    import Mangales from './fundos/Mangales'

    import Contacto from './Contacto'
    import Destinos from './Destinos'
    export default {
        name: "Cuerpo",
        components: {
            Home,
            Contacto,
            Mango, Uva, Banano, MangoMN, UvaMN, BananoMN, MelonMN,
            TungasucaCi, TungasucaCa, SanJuan, SantaElisa, MariaLuisa, Huapalas, Rodricc, Noni, Mangales,
            Empresa, Destinos,
        }
    }
</script>

<style scoped>

    .cuerpo {
        border-top: 1px solid #f7931e;
        border-bottom: 1px solid #f7931e;
    }
</style>