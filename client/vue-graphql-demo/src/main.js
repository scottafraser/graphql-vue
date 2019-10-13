import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import vuetify from "./plugins/vuetify";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,
  apolloProvider
}).$mount("#app");
