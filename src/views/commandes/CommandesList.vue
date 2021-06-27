<template>
  <section>
    <base-dialog :show="!!error" title="Info" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <h3 class="controls">Liste des commande</h3>
      <div class="controls">
        <button class="btn btn-outline-primary btn-sm" @click="loadCommandes">
          Rafraichir
        </button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCommandes">
        <li v-for="commande in filteredCommandes" :key="commande._id">
          <commande-item
            :id="commande._id"
            :address="commande.address"
            :contact-info="commande.clientId"
            :restaurant-info="commande.restaurateurId"
            :status="commande.status"
            :price="commande.totalPrice"
            v-if="isCommandes(commande.status)"
            @acceptCommande="acceptCommande"
          >
          </commande-item>
        </li>
      </ul>
      <h3 v-else>pas de commande pour le moment</h3>
    </base-card>
  </section>
</template>

<script>
import CommandeItem from "@/components/commandes/CommandeItem";
import BaseCard from "@/components/ui/BaseCard";
import BaseSpinner from "@/components/ui/BaseSpinner";
import BaseDialog from "@/components/ui/BaseDialog";
export default {
  name: "CommandesList",
  components: { BaseDialog, BaseSpinner, BaseCard, CommandeItem },
  props: {
    filter: {
      required: false,
    },
  },
  data() {
    return { isLoading: false, error: null };
  },
  created() {
    this.loadCommandes();
  },
  methods: {
    isCommandes(status) {
      return status === "acceptationCommande";
    },
    async loadCommandes() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadCommandes");
      } catch (err) {
        this.error = err.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    async acceptCommande(id) {
      this.isLoading = true;
      try {
        const result = await this.$store.dispatch("accepteCommandes", id);
        console.log(result);
        if (result === "ok") this.error = "La commande vous a étais attribue";
        else this.error = "La commande est deja prise";
      } catch (e) {
        this.error = e.message;
      }
      await this.loadCommandes();
      this.isLoading = false;
    },
  },
  computed: {
    filteredCommandes() {
      return this.$store.getters.getCommandes;
    },
    hasCommandes() {
      return !this.isLoading && this.$store.getters.hasCommandes;
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
