<template>
    <div>
        <v-container>
            <v-row>
                <v-col :cols="12" lg="5" md="5" offset-lg="3" offset-md="3">
                    <h1 class="pb-5">Login</h1>
                    <v-form ref="form" lazy-validation v-model="valid">
                        <v-text-field
                                v-model="form.firstName"
                                required
                                filled
                                rounded
                                label="Enter first name"
                                :rules="firstNameRules"
                        ></v-text-field>
                        <v-text-field
                                v-model="form.lastName"
                                rounded
                                required
                                filled
                                label="Enter last name"
                                :rules="lastNameRules"
                        ></v-text-field>

                        <v-text-field
                                v-model="form.compagnyName"
                                rounded
                                required
                                filled
                                :rules="compagnyNameRules"
                                label="Enter compagny name"
                        ></v-text-field>
                        <v-btn
                                :disabled="!valid"
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
    </div>
</template>

<script>
    import PouchDB from 'pouchdb';

    var db = new PouchDB('dbname');
    export default {
        data() {
            return {
                firstName: '',
                firstNameRules: [
                    v => !!v || 'First Name is required',
                    v => (v && v.length <= 10) || 'First Name must be less than 10 characters',
                ],
                lastName: '',
                lastNameRules : [
                    v => !!v || 'Last Name is required',
                    v => (v && v.length <= 10) || 'Last Name must be less than 10 characters',
                ],
                compagnyName: '',
                compagnyNameRules : [
                    v => !!v || 'Compagny Name is required',
                    v => (v && v.length <= 10) || 'Compagny Name must be less than 10 characters',
                ],
                show: true,
                valid: true,
                form: {
                    cookie: false,
                }
            };
        },
        methods: {
            insertOnPoutchDb() {
                db.put({
                    // _id: this.form.compagnyName,
                    firstName: this.form.lastName,
                    lastName: this.form.lastName,
                    compagnyName: this.form.compagnyName
                });

                // db.changes().on('change', () => {
                //     console.log('Ch-Ch-Changes');
                // });

                db.replicate.to('http://127.0.0.1:5984/epsi%27');
            },
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                    location.href="/questionnaire"
                }
            },

        }
    }

</script>
