<template>
  <span class="badge" :class="type"> status : {{ text }} </span>
</template>

<script>
export default {
  name: "BaseBadge",
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.replace(/([a-z])([A-Z])/g, "$1 $2");
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.acceptationCommande {
  background-color: #3d008d;
  color: white;
}

.acceptationLivraison {
  background-color: #71008d;
  color: white;
}

.acquittementLivraison {
  background-color: #2a8d00;
  color: white;
}

.annuler {
  background-color: #c70101;
  color: white;
}
</style>
