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
                                v-model="rep.value"
                                v-bind:label="rep.text"
                                v-bind:value="rep.value">
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
    import PouchDB from 'pouchdb';

    var db = new PouchDB('db');
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
                this.snackbar = true
                var router = this.$router
                var id1 =this.$route.params.id
                var self = this
                db.get(this.$route.params.id).then(function (doc) {
                    doc.questions = self.questions
                    return db.put(doc)
                }).then(function () {
                    router.push({name : "Result",params:{id:id1}})
                })
            }
        }
    }
</script>

<style scoped>

</style>