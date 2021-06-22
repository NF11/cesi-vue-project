<template>
  <ul v-if="hasCommandes">
    <base-card>
      <h3 class="controls">Mes Commandes</h3>
      <commande-filter @change-filter="setFilters"></commande-filter>
      <div v-for="commande in filteredCommandes" :key="commande._id">
        <commande-item
          :id="commande._id"
          :restaurant-name="commande._id"
          :status="commande.status"
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
import CommandeFilter from "@/components/commandes/CommandeFilter";
export default {
  name: "MyCommandeList",
  components: { CommandeFilter, BaseCard, CommandeItem },
  data() {
    return {
      activeFilter: {
        acceptationCommande: false,
        acceptationLivraison: true,
        acquittementLivraison: true,
        annuler: true,
      },
    };
  },
  props: {
    filter: {
      required: false,
    },
  },
  methods: {
    isCommandes(status) {
      return status === "acceptationCommande";
    },
    setFilters(updateFilter) {
      this.activeFilter = updateFilter;
    },
  },
  computed: {
    filteredCommandes() {
      const commandes = this.$store.getters.getCommandes;
      return commandes.filter((commande) => {
        if (
          this.activeFilter.acceptationCommande &&
          commande.status === "acceptationCommande"
        )
          return true;
        if (
          this.activeFilter.acceptationLivraison &&
          commande.status === "acceptationLivraison"
        )
          return true;
        if (
          this.activeFilter.acquittementLivraison &&
          commande.status === "acquittementLivraison"
        )
          return true;
        if (this.activeFilter.annuler && commande.status === "annuler")
          return true;
        return false;
      });
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
