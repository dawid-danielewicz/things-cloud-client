<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ $t("auth.register") }}</h2>
    </div>

    <p v-if="updateMessage" class="message" :class="[messageType]">{{ updateMessage }}</p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label">{{ $t("auth.email") }}</label>
        <input type="email" id="email" class="form-item" :class="{invalid: !email.isValid}" v-model.trim="email.val" @blur="clearValidity('email')">
        <p v-if="!email.isValid" class="danger">Email can not be empty</p>
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t("auth.name") }}</label>
        <input type="text" id="name" class="form-item" :class="{invalid: !name.isValid}" v-model.trim="name.val" @blur="clearValidity('name')">
        <p v-if="!name.isValid" class="danger">Name can not be empty</p>
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t("auth.password") }}</label>
        <input type="password" id="password" class="form-item" :class="{invalid: !password.isValid}" v-model.trim="password.val" @blur="clearValidity('password')">
        <p v-if="!password.isValid" class="danger">Password can not be empty and must be at least 8 characters long</p>
      </div>

      <div class="form-group">
        <label class="form-label">{{ $t("auth.confirm-password") }}</label>
        <input type="password" id="password_confirmation" class="form-item" :class="{invalid: !password_confirmation.isValid}" v-model.trim="password_confirmation.val" @blur="clearValidity('password_confirmation')">
        <p v-if="!password_confirmation.isValid" class="danger">Passwords are not the same</p>
      </div>

      <input type="submit" class="btn btn-success" value="Register">
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: {
        val: '',
        isValid: true
      },
      name: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      password_confirmation: {
        val: '',
        isValid: true
      },
      formIsValid: true,
      message: {
        val: '',
        type: ''
      }
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.val === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }

      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }

      if (this.password.val === '' || this.password.val.length < 8) {
        this.password.isValid = false;
        this.formIsValid = false;
      }

      if (this.password_confirmation.val !== this.password.val) {
        this.password_confirmation.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        email: this.email.val,
        name: this.name.val,
        password: this.password.val,
        password_confirmation: this.password_confirmation.val
      }

      this.$store.dispatch('auth/register', formData)

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