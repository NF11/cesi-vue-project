<template>
  <li>
    <h3>Restaurant le {{ restaurantInfo.name }}</h3>
    <base-badge :title="changeStatusName" :type="status"></base-badge>
    <div>
      <span>Address de livraison : {{ address }}</span>
    </div>
    <div>
      <span>Numéro du client : {{ contactInfo.phone }}</span>
    </div>
    <div>
      <span>Prix total : {{ price }}</span>
    </div>
    <div class="actions" v-if="this.status === 'acceptationLivraison'">
      <button @click="annulerCommandeEmit" class="btn btn-outline-danger">
        Annuler
      </button>
    </div>
    <div class="actions" v-else-if="this.status === 'acceptationCommande'">
      <button @click="acceptCommandeEmit" class="btn btn-outline-success">
        Accepter
      </button>
    </div>
  </li>
</template>

<script>
import faker from "faker";
import BaseBadge from "@/components/ui/BaseBadge";
export default {
  name: "CommandeItem",
  components: { BaseBadge },
  props: ["id", "status", "address", "contactInfo", "restaurantInfo", "price"],
  computed: {
    fakeAddress() {
      return faker.address.streetName() + " " + faker.address.streetAddress();
    },
    changeStatusName() {
      if (this.status === "acceptationCommande") return "Nouvelle Commande";
      else if (this.status === "acceptationLivraison")
        return "Livraison en cours";
      else if (this.status === "acquittementLivraison")
        return "Livraison faite";
      else return "Annuler";
    },
  },
  methods: {
    acceptCommandeEmit() {
      this.$emit("acceptCommande", this.id);
    },
    annulerCommandeEmit() {
      this.$emit("annulerCommande", this.id);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
