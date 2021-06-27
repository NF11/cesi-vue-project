<template>
  <section>
    <base-dialog :show="!!error" title="Erreur" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <h3 class="controls">Mes Commandes</h3>
      <div class="controls mb-3">
        <base-button mode="outline" @click="loadMyCommandes"
          >Rafraichir</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasMyCommandes">
        <commande-filter @change-filter="setFilters"></commande-filter>
        <div v-for="commande in filteredCommandes" :key="commande._id">
          <commande-item
            :id="commande._id"
            :address="commande.address"
            :contact-info="commande.clientId"
            :restaurant-info="commande.restaurateurId"
            :status="commande.status"
            :price="commande.totalPrice"
          >
          </commande-item>
        </div>
      </ul>
      <h3 v-else>pas de commande pour le moment</h3>
    </base-card>
  </section>
</template>

<script>
import CommandeItem from "@/components/commandes/CommandeItem";
import BaseCard from "@/components/ui/BaseCard";
import CommandeFilter from "@/components/commandes/CommandeFilter";
import BaseDialog from "@/components/ui/BaseDialog";
import BaseSpinner from "@/components/ui/BaseSpinner";
export default {
  name: "MyCommandeList",
  components: {
    CommandeFilter,
    BaseCard,
    CommandeItem,
    BaseDialog,
    BaseSpinner,
  },
  data() {
    return {
      isLoading: false,
      error: null,
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
  created() {
    this.loadMyCommandes();
  },
  methods: {
    isCommandes(status) {
      return status === "acceptationCommande";
    },
    setFilters(updateFilter) {
      this.activeFilter = updateFilter;
    },
    async loadMyCommandes() {
      this.isLoading = true;
      try {
        const user = this.$store.getters.getUser;
        await this.$store.dispatch("loadMyCommandes", user._id);
      } catch (err) {
        this.error = err.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
    filteredCommandes() {
      const commandes = this.$store.getters.getMyCommandes;
      console.log(commandes);
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
    hasMyCommandes() {
      return !this.isLoading && this.$store.getters.hasMyCommandes;
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
