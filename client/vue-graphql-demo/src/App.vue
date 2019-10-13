
 <template>
  <v-app>
    <v-container>
      <v-layout justify-center>
        <div id="app">
          <DataTables />
          <!-- <v-container>
            <v-row>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </v-row>

            <v-row v-for="contact in contacts">
              <v-col cols="12" sm="3">{{ contact.firstName }}</v-col>
              <v-col cols="12" sm="3">{{ contact.lastName }}</v-col>
              <v-col cols="12" sm="3">{{ contact.email }}</v-col>
              <v-col cols="12" sm="3">
                <input type="button" @click="selectContact(contact)" value="Select" />
                <input type="button" @click="deleteContact(contact.id)" value="Delete" />
              </v-col>
            </v-row>
          </v-container>-->
          <!-- <br />
          <form>
            <label>First Name</label>
            <input type="text" name="firstName" v-model="firstName" />
            <br />

            <label>Last Name</label>
            <input type="text" name="lastName" v-model="lastName" />
            <br />

            <label>Email</label>
            <input type="email" name="email" v-model="email" />
            <br />
            <input
              v-if="!id"
              type="button"
              @click="createContact(firstName, lastName, email)"
              value="Add"
            />
            <input
              v-if="id"
              type="button"
              @click="updateContact(id, firstName, lastName, email)"
              value="Update"
            />
            <input type="button" @click="clearForm()" value="Clear" />
          </form>-->
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import DataTables from './components/DataTables'
export default {
  name: 'app',
  components: {
    DataTables
  },
  // data() {
  // }
}
//     return {
//       id: null,
//       firstName: '',
//       lastName: '',
//       email: ''    }
//   },
//   apollo: {
//     contacts: gql`query {
//         contacts {
//           id,
//           firstName,
//           lastName,
//           email
//         }
//       }`,
//   },
//   methods: {
//     createContact(firstName, lastName, email) {
//       console.log(`Create contact: ${email}`)
//       this.$apollo.mutate({
//         mutation: gql`mutation createContact($firstName: String!, $lastName: String!, $email: String!){
//                 createContact(firstName: $firstName, lastName: $lastName, email: $email) {
//                   id,
//                   firstName,
//                   lastName,
//                   email}
//               }`,
//         variables: {
//           firstName: firstName,
//           lastName: lastName,
//           email: email
//         }
//       }
//       )
//       location.reload();
//     },
//     updateContact(id, firstName, lastName, email) {
//       console.log(`Update contact: # ${id}`)
//       this.$apollo.mutate({
//         mutation: gql`mutation updateContact($id: ID!, $firstName: String!, $lastName: String!, $email: String!){
//                 updateContact(id: $id, firstName: $firstName, lastName: $lastName, email: $email)
//               `,
//         variables: {
//           id: id,
//           firstName: firstName,
//           lastName: lastName,
//           email: email
//         }
//       }
//       )
//       location.reload();
//     },
//     deleteContact(id) {
//       console.log(`Delete contact: # ${id}`)
//       this.$apollo.mutate({
//         mutation: gql`mutation deleteContact($id: ID!){
//                 deleteContact(id: $id)
//               }`,
//         variables: {
//           id: id,
//         }
//       }
//       )
//       location.reload();
//     },
//     selectContact(contact) {
//       this.id = contact.id;
//       this.firstName = contact.firstName;
//       this.lastName = contact.lastName;
//       this.email = contact.email;
//     },
//     clearForm() {
//       this.id = null;
//       this.firstName = '';
//       this.lastName = '';
//       this.email = '';
//     }
//   }
// }
</script>
