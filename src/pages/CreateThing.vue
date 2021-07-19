<template>
  <v-row align="center">
    <v-col>
      <div>
        <div class="card-header">
          <h2>{{ $t("things.create") }}</h2>
        </div>

        <!-- <p v-if="updateMessage" class="message" :class="[messageType]">{{ updateMessage }}</p> -->

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="form-label">{{ $t("things.name") }}</label>
            <input type="text" id="name" class="form-item" :class="{invalid: !name.isValid}" v-model.trim="name.val" @blur="clearValidity('name')">
            <p v-if="!name.isValid" class="danger">Name can not be empty</p>
          </div>

          <div class="form-group">
            <label class="form-label">{{ $t("things.group") }}</label>
            <input type="text" id="group" class="form-item" v-model.trim="group.val">
          </div>

          <input type="submit" class="btn btn-success" value="Create">
        </form>
      </div>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "CreateThing",
  data() {
    return {
      name: {
        val: '',
        isValid: true
      },
      group: {
        val: ''
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      if (name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()

      const formData = {
        name: this.name.val,
        group: this.group.val
      }

      this.$store.dispatch('things/createThing', {
        name: formData.name,
        group: formData.group
      })

    }
  }
}
</script>

<style scoped>
.card {
  margin-top: 5rem;
  width: 50%;
  margin-left: 20%;
  padding: 30px;
  text-align: center;
}

.form-item {
  border-bottom: #a1a1a1 1px solid;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.form-item:focus {
  outline: none !important;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: #4b7bec 1px solid;
}

.form-label {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #2f3542;
}

.card-header {
  text-align: center;
}

.card-header h2 {
  color: #2f3542;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

form {
  width: 80%;
  margin-left: 10%;
}

.form-group {
  margin-bottom: 3rem;
}

.btn {
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

.btn-success {
  background-color: #42b983;
  color: white;
}

.form-group {
  text-align: left;
}

.invalid {
  border-bottom: #fc5c65 1px solid;
}

.danger {
  color: #fc5c65;
}

.success-message {
  background-color: #42b983;
}

.danger-message {
  background-color: #fc5c65;
}

.message {
  display: inline-block;
  padding: 20px 30px;
  color: white;
  margin: 30px 0;
}
</style>