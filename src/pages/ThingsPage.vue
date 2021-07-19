<template>
  <router-link to="/things/create" class="btn btn-success">
    {{ $t("things.create") }}
    <v-icon icon="mdi-plus-circle-outline" />
  </router-link>
  <p v-if="updateMessage" class="message" :class="[messageType]"><span class="message-content">{{ updateMessage }}</span> <span class="close" @click="clearMessage()">x</span></p>
  <v-card class="my-5 py-5" color="grey-lighten-5" v-for="thing in things" :key="thing.id">
    <div class="left-side">
      <span class="badge">{{ thing.name }}</span>
    </div>
    <div class="right-side">
      <router-link :to="`/things/${thing.id}`" class="btn btn-success">{{ $t("things.choose") }}</router-link>
      <router-link :to="`/things/${thing.id}/edit`" class="btn btn-primary">{{ $t("things.edit") }}</router-link>
      <button class="btn btn-danger" @click="deleteThing(thing.id)">{{ $t("things.delete") }}</button>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ThingsPage",
  mounted() {
    this.getThings()
    this.clearMessage()
  },
  methods: {
    async getThings() {
      await this.$store.dispatch('things/getThings')
    },
    async deleteThing(id) {
      await this.$store.dispatch('things/deleteThing', {
        id: id
      })
    },
    clearMessage() {
      this.$store.commit('things/clearMessage')
    }
  },
  computed: {
    things() {
      return this.$store.state.things.things
    },
    updateMessage() {
      return this.$store.state.things.message
    },
    messageType() {
      return this.$store.state.things.type + '-message'
    }
  }

}
</script>

<style scoped>
.things-list {
 background-color: #f1f2f6;
 padding: 20px;
 margin-bottom: 30px;
  margin-top: 20px;
}
.badge {
  color: #2f3542;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 5%;
  margin-right: 65%;
}

.btn {
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;
  display: inline-block;
}

.btn-success {
  background-color: #42b983;
  color: white;
}

.btn-primary {
  background-color: #4b7bec;
  color: white;
}

.btn-danger {
  background-color: #fc5c65;
  color: white;
}
.success-message {
  background-color: #42b983;
}

.danger-message {
  background-color: #fc5c65;
}

.message {
  display: block;
  width: 50%;
  padding: 20px 30px;
  color: white;
  margin-left: 18vw;
  margin-top: 30px;
  margin-bottom: 30px;
}

.left-side {
  display: inline-block;
  width: 60%;
  margin-right: 20%;
}

.right-side {
  display: inline-block;
  width: 20%;
}

.message-content {
  width: 30%;
  margin-left: 35%;
  margin-right: 42%;
  text-align: center;
}

.close {
  width: 5%;
  cursor: pointer;
  text-align: center;
}
</style>