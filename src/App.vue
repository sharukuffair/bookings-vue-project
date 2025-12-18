<template>
  <div id="app" class="text-[#2c3e50] select-none">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
}

/* color pallete */
/* 
    main:#0047B2
    accent:#e6edf7
    cardBG:#ccdaf0
    hover:#002b6b
    main-text:#0040a0
    text:#2c3e50

 */
</style>
