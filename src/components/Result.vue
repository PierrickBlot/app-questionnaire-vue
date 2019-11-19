<template>
    <v-container>
        <v-row>
            <v-col :cols="12" lg="5" md="5" offset-lg="3" offset-md="3">
                Votre score est de : {{score}} / {{total}} <br>
                <a href="/">Retour au login</a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import PouchDB from 'pouchdb';

    var db = new PouchDB('db');

    export default {
        name: "Result",
        props: ['result'],

        data() {

            return {
                score:'',
                question: '',
                total:'',
                results:''
            }
        },
        mounted() {
            var vm = this
            var id1 = this.$route.params.id
            db.get(id1).then(function (doc) {
                doc.questions.question.map(function (q) {

                    vm.score = doc.questions.question.length
                    vm.total = doc.questions.question.length
                    q.reponse.map(function (r) {
                        if (r.bool==true && r.bool!=r.value){
                            vm.score --
                        }
                    })
                })
            })
        },
    }

</script>

<style scoped>

</style>