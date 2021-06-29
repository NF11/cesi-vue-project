<template>
  <section>
    <base-card>
      <h2>Mes Info</h2>
      <livreur-form @sava-data="saveData"></livreur-form>
    </base-card>
  </section>
</template>
<script>
import LivreurForm from "@/components/Livreurs/LivreurForm";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "Me",
  components: { BaseCard, LivreurForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("registerLivreur", data);
    },
  },
};
</script>

<style scoped></style>
