<template>
  <form @submit.prevent="submitFrom">
    <div class="form-control" :class="{ invalid: !nom.isValid }">
      <label for="nom">Nom</label>
      <input type="text" id="nom" v-model="nom.val" />
      <p v-if="!nom.isValid">Le champ est vide</p>
    </div>
    <div class="form-control" :class="{ invalid: !prenom.isValid }">
      <label for="prenom">Prénom</label>
      <input type="text" id="prenom" v-model="prenom.val" />
      <p v-if="!prenom.isValid">Le champ est vide</p>
    </div>
    <div class="form-control" :class="{ invalid: !email.isValid }">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email.val" />
      <p v-if="!email.isValid">Le champ est vide</p>
    </div>
    <div class="form-control" :class="{ invalid: !tel.isValid }">
      <label for="tel">Telephone</label>
      <input type="tel" id="tel" v-model="tel.val" />
      <p v-if="!tel.isValid">Le champ est vide</p>
    </div>
    <div class="form-control" :class="{ invalid: !password.isValid }">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" v-model="password.val" />
      <p v-if="!password.isValid">Le champ est vide</p>
    </div>
    <div class="form-control" :class="{ invalid: !password2.isValid }">
      <label for="password2">Confirmation</label>
      <input type="password" id="password2" v-model="password2.val" />
      <p v-if="!password2.isValid">Le mot de passe est different</p>
    </div>
    <p v-if="!formIsValid">Corrigiez les erreur dans le formulaire merci</p>
    <base-button>Inscription</base-button>
  </form>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
export default {
  emits: ["sava-data"],
  name: "LivreurForm",
  components: { BaseButton },
  data() {
    return {
      nom: {
        val: "",
        isValid: true,
      },
      prenom: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      tel: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      password2: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.nom.val === "") {
        this.nom.isValid = false;
        this.formIsValid = false;
      }
      if (this.prenom.val === "") {
        this.prenom.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.tel.val === "") {
        this.tel.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.password2.val !== this.password.val) {
        this.password2.isValid = false;
        this.formIsValid = false;
      }
    },
    submitFrom() {
      this.validateForm();

      if (!this.formIsValid) return;
      const fromData = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        tel: this.tel,
        password: this.password,
        password2: this.password2,
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
