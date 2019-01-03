<template>
    <b-row>
        <b-col md="6">
            <h2 class="text-center">Contáctenos</h2>
            <h4>Frutas de Piura SAC</h4>
            <p>Calle las Fucsias Mz AB lote 25-26 III Etapa, Urb. Miraflores Country Club, Castilla - Piura</p>
            <p class="my-0"><strong>Oficina:</strong> +51 073 613982</p>
            <p class="my-0"><strong>Móvil:</strong> +51 969906788</p>
            <p class="my-0"><strong>E-mail:</strong> frutasdepiura@frutasdepiura.com.pe</p>
            <p>Mapa</p>
        </b-col>
        <b-col md="6">
            <h2 class="text-center">Datos del formulario</h2>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="exampleInputGroup1"
                              label="Nombre:"
                              label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                  type="text"
                                  v-model="form.name"
                                  required
                                  placeholder="Ingrese su nombre">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                              label="Teléfono:"
                              label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                  type="text"
                                  v-model="form.phone"
                                  required
                                  placeholder="Ingrese su teléfono">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup3"
                              label="Empresa:"
                              label-for="exampleInput3">
                    <b-form-input id="exampleInput3"
                                  type="text"
                                  v-model="form.company"
                                  placeholder="Imgrese el nombre de su empresa">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup4"
                              label="E-Mail:"
                              label-for="exampleInput4">
                    <b-form-input id="exampleInput4"
                                  type="text"
                                  v-model="form.email"
                                  placeholder="Imgrese su E-Mail">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup5"
                              label="Destinatario:"
                              label-for="exampleInput5">
                    <b-form-select id="exampleInput5"
                                   :options="addressee"
                                   required
                                   v-model="form.addressee">
                    </b-form-select>
                </b-form-group>
                <b-button type="submit" variant="primary" class="px-4 mr-2">Enviar</b-button>
                <b-button type="reset" variant="danger" class="px-4 ml-2">Limpiar</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "Contacto",
        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    company: '',
                    email: '',
                    addressee: null,
                    message: '',
                },
                addressee: [
                    { text: 'Seleccione', value: null },
                    'Gerencia', 'Exportaciones', 'Compras', 'Tesorería', 'Contabilidad', 'Aseguramiento de la Calidad', 'Tecnologías de la Información'
                ],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.name = '';
                this.form.phone = '';
                this.form.company = '';
                this.form.email = '';
                this.form.addressee = null;
                this.form.message = '';
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => { this.show = true });
        }
        }
    }
</script>

<style scoped>

</style>
