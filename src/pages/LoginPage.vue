<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ $t("auth.login") }}</h2>
    </div>

    <p v-if="updateMessage" class="message" :class="[messageType]">{{ updateMessage }}</p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label">{{ $t("auth.email") }}</label>
        <input type="email" id="email" class="form-item" :class="{invalid: !email.isValid}" v-model.trim="email.val" @blur="clearValidity('email')">
        <p v-if="!email.isValid" class="danger">Email can not be empty</p>
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t("auth.password") }}</label>
        <input type="password" id="password" class="form-item" :class="{invalid: !password.isValid}" v-model.trim="password.val" @blur="clearValidity('password')">
        <p v-if="!password.isValid" class="danger">Password can not be empty</p>
      </div>

      <input type="submit" class="btn btn-success" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      if (this.email.val === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }

      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      const formData = {
        email: this.email.val,
        password: this.password.val
      }

      this.$store.dispatch('auth/login', formData)
    }
  },
  computed: {
    updateMessage() {
      return this.$store.state.auth.message
    },
    messageType() {
      return this.$store.state.auth.type + '-message'
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