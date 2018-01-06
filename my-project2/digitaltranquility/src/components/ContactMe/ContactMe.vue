<template>
  <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
  <v-content>
    <section>
  <v-form @submit.prevent="submit" v-model="valid" lazy-validation ref="form">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Phone"
      v-model="phone"
      required
    ></v-text-field>
    
            <v-text-field
              name="input-7-1"
              label="Question"
              multi-line
            ></v-text-field>
    <v-btn @click="resetForm">clear</v-btn>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
  </v-form>
</section>
</v-content>
</v-layout>
</template>


<script>
/* eslint-disable */
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      checkbox: false
    }),
    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        firebase.database().ref('contactform').push(this.form)
          .then((data) => {
          	console.log(data)
          })
          .catch((error) => {
          	console.log(error)
          })
      }
    }
  }
</script>