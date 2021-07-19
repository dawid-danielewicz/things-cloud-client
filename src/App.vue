<template>
  <v-app>
    <the-header></the-header>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./components/ui/TheHeader";

export default {
  name: 'App',

  components: {
    TheHeader,
  },

  data: () => ({
    //
  }),
}
</script>
