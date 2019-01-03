<template>
    <footer class="text-center">
        <img src="../assets/certificaciones.png" alt="Certificaciones" class="img-fluid">
        <h5 class="text-muted"> {{ now }} &copy; Fabian Ary Merino Livia</h5>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        computed: {
            now: function () {
                return new Date().getFullYear();
            }
        }
    }
</script>

<style scoped>

</style>