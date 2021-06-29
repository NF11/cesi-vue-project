<template>
  <form @submit.prevent="submitFrom">
    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email.val" />
      <p v-if="!email.isValid">Le champ est vide</p>
    </div>
    <div class="form-control" :class="{ invalid: !password.isValid }">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" v-model="password.val" />
      <p v-if="!password.isValid">Le champ est vide</p>
    </div>
    <button class="btn btn-outline-success">Connexion</button>
  </form>
</template>

<script>
export default {
  emits: ["sava-data"],
  name: "LoginForm",
  data() {
    return {
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    submitFrom() {
      this.validateForm();

      if (!this.formIsValid) return;
      const fromData = {
        email: this.email.val,
        password: this.password.val,
      };
      this.$emit("sava-data", fromData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
