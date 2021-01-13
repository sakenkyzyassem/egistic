<template>
  <div id="app">
    <top-nav />
    <main-nav />

    <router-view></router-view>

    <main-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TopNav from './components/TopNav.vue';
import MainNav from './components/Nav.vue';
import MainFooter from './components/Footer.vue';

@Component({
  components: {
    TopNav,
    MainNav,
    MainFooter,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">

</style>
