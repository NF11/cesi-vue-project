<template>
  <section>
    <base-card>
      <h2>Parrainage un livreur</h2>
      <parrainer-from @sava-data="saveData"></parrainer-from>
    </base-card>
  </section>
</template>
<script>
import ParrainerFrom from "@/components/Livreurs/ParrainerForm";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "Parrainer",
  components: { BaseCard, ParrainerFrom },
  methods: {
    saveData(data) {
      this.$store.dispatch("registerLivreur", data);
    },
  },
};
</script>

<style scoped></style>
