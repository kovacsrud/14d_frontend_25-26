<script setup>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import {RouterView} from 'vue-router';
</script>

<template>
  <Header />
  <Menu />
  <RouterView/>
 
</template>
