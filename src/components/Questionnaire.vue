<template>
    <v-container>
        <v-row>
            <v-col :cols="12" lg="5" md="5" offset-lg="3" offset-md="3">
                <v-form>
                    <li v-bind:key="item" v-for="item in questions.question">
                        {{item.nom}}
                        <v-checkbox
                                class="pb-5"
                                v-for="rep in item.reponse" v-bind:key="rep"
                                v-model="checkbox"
                                v-bind:label="rep"
                                v-bind:value="rep">
                            >
                        </v-checkbox>
                    </li>
                    <v-btn
                            color="success"
                            class="mr-4"
                            @click="validate"
                    >
                        Validate
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import question from "../assets/question";

    export default {
        name: "Questionnaire",
        props: {},
        data() {
            return {
                questions: question,
                msg: 'questionnaire'
            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            }
        }
    }
</script>

<style scoped>

</style>