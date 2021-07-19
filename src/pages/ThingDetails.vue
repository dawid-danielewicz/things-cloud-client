<template>
  <div class="header">
    <h2>{{ thingName }}</h2>
    <p>{{ $t("things.group") }}: <span class="danger">{{ thingGroup }}</span></p>
  </div>
  <v-row>
    <v-col>
      <v-card class="text-center">
          <div class="bg-indigo py-6">
            <p v-if="thingLamp === 0"> {{ $t("things.lamp") }}: <span class="danger">{{ $t("things.off") }}</span></p>
            <p v-else>{{ $t("things.lamp") }}: <span class="success">{{ $t("things.on") }}</span></p>
          </div>
          <span class="sensor">{{ $t("things.temperature") }}: {{ thingTemperature }} <sup>o</sup>C</span>
          <span class="sensor">{{ $t("things.humidity") }}: {{ thingHumidity }}%</span>
          <br>
          <button class="btn btn-success" v-if="thingLamp === 0" @click="updateLamp(1)">{{ $t("things.turn-on") }}</button>
          <button class="btn btn-danger" v-else @click="updateLamp(0)">{{ $t("things.turn-off") }}</button>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "ThingDetails",
  async mounted() {
    await this.getThingData()
    this.sockets.subscribe(`lamp:${this.thingId}`, function (data) {
      this.$store.commit('things/setLamp', +data)
    })
  },
  unmounted() {
    this.sockets.unsubscribe(`lamp:${this.thingId}`)
  },
  methods: {
    async getThingData(){
      await this.$store.dispatch('things/getThing', {
        id: this.$route.params.id
      })
    },
    updateLamp(state) {
      this.$store.dispatch('things/updateLamp', {
        id: this.$route.params.id,
        lamp: state
      })
    }
  },
  computed: {
    thingId() {
      return this.$store.state.things.id
    },
    thingName() {
      return this.$store.state.things.name
    },
    thingGroup() {
      return this.$store.state.things.group
    },
    thingLamp() {
      return this.$store.state.things.lamp
    },
    thingTemperature() {
      return this.$store.state.things.temperature
    },
    thingHumidity() {
      return this.$store.state.things.humidity
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #f1f2f6;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 5rem;
  padding: 20px;
}
.card {
  background-color: #f1f2f6;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 5rem;
  width: 50%;
  margin-left: 20vw;
}
.header h2 {
  color: #2f3542;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.header p {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card p {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.danger {
  color: #fc5c65;
}

.success {
  color: #42b983;
}
.sensor {
  margin-right: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}
.btn {
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin: 3rem 0;
}
.btn-success {
  background-color: #42b983;
  color: white;
}

.btn-danger {
  background-color: #fc5c65;
  color: white;
}

.card-header {
  background-color: #4b7bec;
  color: white;
  padding: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 5rem;
}
</style>