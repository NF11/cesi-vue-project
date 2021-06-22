<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view />
  </div>
</template>

<script>
import TopMenu from "@/components/layout/TopMenu";
export default {
  components: { TopMenu },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
