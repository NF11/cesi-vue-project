<template>
  <section>
    <base-card>
      <h2>Connexion</h2>
      <login-form @sava-data="saveData"></login-form>
    </base-card>
  </section>
</template>
<script>
import BaseCard from "@/components/ui/BaseCard";
import LoginForm from "@/components/Livreurs/LoginForm";
export default {
  name: "Login",
  components: { LoginForm, BaseCard },
  methods: {
    saveData(data) {
      this.$store.dispatch("registerLivreur", data);
    },
  },
};
</script>

<style scoped></style>
