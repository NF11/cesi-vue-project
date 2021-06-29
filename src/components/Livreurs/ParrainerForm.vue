<template>
  <form @submit.prevent="submitFrom">
    <div class="form-control" :class="{ invalid: !nom.isValid }">
      <label for="nom">Nom</label>
      <input type="text" id="nom" v-model="nom.val" />
      <p v-if="!nom.isValid">Le champ est vide</p>
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
    <p v-if="!formIsValid">Corrigiez les erreur dans le formulaire merci</p>
    <base-button>Parrainer</base-button>
  </form>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
export default {
  emits: ["sava-data"],
  name: "ParrainerForm",
  components: { BaseButton },
  data() {
    return {
      nom: {
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
    },
    submitFrom() {
      this.validateForm();

      if (!this.formIsValid) return;
      const fromData = {
        name: this.nom.val,
        email: this.email.val,
        tel: this.tel.val,
        role: "livreur",
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
