<template>
  <v-row align-self="center">
    <v-col>
      <v-card class="pa-5 text-center mt-10">
        <h1>{{ $t("index.info") }}</h1>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "IndexPage"
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
.card {
  background-color: #f1f2f6;
  text-align: center;
  border-radius: 10px;
  margin-top: 25vh;
  width: 50%;
  margin-left: 20vw;
  padding: 5rem 0;
}

</style>