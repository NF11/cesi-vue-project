<template>
  <header>
    <nav>
      <h1 v-if="isLogin">
        <router-link to="/commandes">Liste des commandes</router-link>
      </h1>
      <h1 v-else><router-link to="/">Livreur App</router-link></h1>
      <ul>
        <li v-if="isLogin">
          <router-link to="/my-commande">Mes commandes</router-link>
        </li>
        <li v-if="isLogin"><router-link to="/me">Mon profile</router-link></li>
        <li v-if="isLogin">
          <router-link to="/parrainage">Parrainage</router-link>
        </li>
        <li v-if="!isLogin">
          <router-link to="/login">Connexion</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TopMenu",

  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #00888d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: rgb(236, 188, 183);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f3c491;
}

h1 {
  margin: 0;
  font-size: 24px;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
