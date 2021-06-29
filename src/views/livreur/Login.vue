<template>
  <section>
    <base-dialog :show="!!error" title="Erreur" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
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

  data() {
    return { isLoading: false, error: null };
  },
  methods: {
    async saveData(data) {
      try {
        await this.$store.dispatch("loginUser", data);
        await this.$router.replace("/my-commande");
      } catch (e) {
        this.error = "Identifiant incorrect";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped></style>
