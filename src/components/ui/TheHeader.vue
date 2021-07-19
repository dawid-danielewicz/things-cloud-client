<template>
  <v-app-bar color="indigo" height="80" class="py-2">
    <v-app-bar-title class="text-white">Test App</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn text color="indigo">
      <router-link to="/" class="nav-link">{{ $t("nav.home") }}</router-link>
    </v-btn>

    <v-btn text color="indigo" v-if="isLoggedIn">
      <router-link to="/things" class="nav-link">{{ $t("nav.things") }}</router-link>
    </v-btn>

    <v-btn text color="indigo" v-if="!isLoggedIn">
      <router-link to="/login" class="nav-link">{{ $t("nav.login") }}</router-link>
    </v-btn>

    <v-btn text color="indigo" v-if="!isLoggedIn">
      <router-link to="/register" class="nav-link">{{ $t("nav.register") }}</router-link>
    </v-btn>

    <v-btn variant="outlined" color="red" class="text-white" v-if="isLoggedIn" @click="logout">
      <v-icon icon="mdi-logout" />
      {{ $t("nav.logout") }}
    </v-btn>

    <v-icon icon="mdi-translate" class="ml-5 text-white"/>
    <select v-model="$i18n.locale" class="ml-3 mr-6 text-white">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" class="text-black">
        {{ lang }}
      </option>
    </select>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",
  data(){
    return {
      langs: ['en', 'pl']
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.token
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style scoped>

nav {
  background-color: #4b7bec;
  color: white;
  padding: 30px;
}
.brand {
  display: inline-block;
  margin-left: 10%;
}

.brand a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.brand a:hover {
  color: #fc5c65;
}

.menu {
  display: inline-block;
  margin-left: 50%;
  text-transform: uppercase;
}

.menu-item {
  display: inline-block;
}

.menu-item a,span {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-right: 15px;
  letter-spacing: 1px;
  cursor: pointer;
}

.menu-item a:hover {
  color: #fc5c65;
}

.menu-item span:hover {
  color: #fc5c65;
}

.text-white {
  color: white;
}

.nav-link {
  text-decoration: none;
  color: white;
}

</style>