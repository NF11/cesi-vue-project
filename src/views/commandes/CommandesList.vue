<template>
  <ul v-if="hasCommandes">
    <base-card>
      <h3 class="controls">Liste des commande</h3>
      <div v-for="commande in filteredCommandes" :key="commande._id">
        <commande-item
          :id="commande._id"
          :restaurant-name="commande._id"
          :status="commande.status"
          v-if="isCommandes(commande.status)"
        >
        </commande-item>
      </div>
    </base-card>
  </ul>
  <h3 v-else>pas de commande pour le moment</h3>
</template>

<script>
import CommandeItem from "@/components/commandes/CommandeItem";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "CommandesList",
  components: { BaseCard, CommandeItem },
  props: {
    filter: {
      required: false,
    },
  },
  methods: {
    isCommandes(status) {
      return status === "acceptationCommande";
    },
  },
  computed: {
    filteredCommandes() {
      return this.$store.getters.getCommandes;
    },
    hasCommandes() {
      return this.$store.getters.hasCommandes;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
