<template>
  <v-container>
    <v-layout text-center wrap>
      <v-data-table :headers="headers" :items="contacts" :items-per-page="5" class="elevation-1"></v-data-table>
    </v-layout>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
          <!-- <v-col cols="12" md="3">
            <v-btn @click="selectContact(contact)" value="Select">Select</v-btn>
            <v-btn @click="deleteContact(contact.id)" value="Delete">Delete</v-btn>
          </v-col>-->
        </v-row>
      </v-container>
    </v-form>
    <v-btn
      v-if="!id"
      color="success"
      class="mr-4"
      @click="createContact(firstName, lastName, email)"
      value="Add"
    >Create</v-btn>
    <v-btn
      v-if="id"
      color="error"
      class="mr-4"
      value="Update"
      @click="updateContact(id, firstName, lastName, email)"
    >Update</v-btn>
    <v-btn @click="clearForm()" value="Clear">Clear</v-btn>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'datatables',
  data() {
    return {
      id: null,
      valid: false,
      firstName: '',
      lastName: '',
      error: null,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      headers: [
        // {
        //   text: 'Contacts',
        //   align: 'left',
        //   sortable: false,
        //   value: 'name',
        // },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Email', value: 'email' }
      ],
    }
  },
  apollo: {
    contacts: gql`query {
        contacts {
          id,
          firstName,
          lastName,
          email
        }
      }`
  },
  methods: {
    createContact(firstName, lastName, email) {
      // console.log(`Create contact: ${email}`)
      this.$apollo.mutate({
        mutation: gql`mutation createContact($firstName: String!, $lastName: String!, $email: String!){
                createContact(firstName: $firstName, lastName: $lastName, email: $email) {
                  id,
                  firstName,
                  lastName,
                  email}
              }`,
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email
        },
      }
      )
      //location.reload();
    },
    updateContact(id, firstName, lastName, email) {
      console.log(`Update contact: # ${id}`)
      this.$apollo.mutate({
        mutation: gql`mutation updateContact($id: ID!, $firstName: String!, $lastName: String!, $email: String!){
                updateContact(id: $id, firstName: $firstName, lastName: $lastName, email: $email)
              `,
        variables: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email
        }
      }
      )
      location.reload();
    },
    deleteContact(id) {
      console.log(`Delete contact: # ${id}`)
      this.$apollo.mutate({
        mutation: gql`mutation deleteContact($id: ID!){
                deleteContact(id: $id)
              }`,
        variables: {
          id: id,
        }
      }
      )
      location.reload();
    },
    selectContact(contact) {
      this.id = contact.id;
      this.firstName = contact.firstName;
      this.lastName = contact.lastName;
      this.email = contact.email;
    },
    clearForm() {
      this.id = null;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    }
  },
  mounted() {
    console.log(this.contacts)
  }
}
</script>