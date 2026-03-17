<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Posts from './components/Posts.vue';
import Menu from './components/Menu.vue';
import {RouterView} from 'vue-router';
</script>

<template>
  <Header />
  <Menu />
  <RouterView/>
 
</template>
