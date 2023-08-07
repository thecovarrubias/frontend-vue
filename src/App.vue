<script setup>
import Navbar from "./components/App/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="container-fluid mt-3">
    <div class="row">
      <router-view />
    </div>
  </div>
</template>