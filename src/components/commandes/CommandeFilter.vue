<template>
  <base-card class="m-0">
    <h5>Filter :</h5>
    <span class="filter-option">
      <input
        type="checkbox"
        id="acceptationCommande"
        checked
        @change="setFilter"
        hidden
      />
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="acceptationLivraison"
        checked
        @change="setFilter"
      />
      <label for="acceptationLivraison">Livraison en cours</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="acquittementLivraison"
        checked
        @change="setFilter"
      />
      <label for="acquittementLivraison">Livraison faite</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="annuler" checked @change="setFilter" />
      <label for="annuler">Annuler</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "CommandeFilter",
  components: { BaseCard },
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        acceptationCommande: false,
        acceptationLivraison: true,
        acquittementLivraison: true,
        annuler: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilter = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updateFilter;
      this.$emit("change-filter", updateFilter);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
