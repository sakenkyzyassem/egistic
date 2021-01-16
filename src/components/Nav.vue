<template>
    <b-navbar class="navbar" variant="dark" type="dark" tag="nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav :justified="true" :fill="true">
          <b-nav-item
            v-for="(item, index) in navItems1"
            :key="index"
            :to="item.to"
            class="mx-auto"
          >
            {{ item.title }}
          </b-nav-item> 
        </b-navbar-nav> 

        <b-navbar-brand
          class="mb-0 mx-auto"
          to="/"
        >
            <logo :height="navLogoHeight"></logo>
        </b-navbar-brand>

        <b-navbar-nav :justified="true" :fill="true" class="ml-auto">
          <b-nav-item
            v-for="(item, index) in navItems2"
            :key="index"
            :to="item.to"
          >
            <b-navbar-text>{{ item.title }}</b-navbar-text>
          </b-nav-item> 
        </b-navbar-nav> 
      </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Logo from './Logo.vue';
import { navItems1, navItems2 } from '@/api/data';

@Component({
    name: 'MainNav',
    components: {
        Logo,
    },
})
export default class MainNav extends Vue {
  private navItems1: ELink[] = navItems1;
  private navItems2: ELink[] = navItems2;
}
</script>

<style lang="scss">
@import '../App.scss';
.navbar {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 96px;
  color: $white;

  .navbar-nav {
    width: calc(50% - 75px);
  }
}
</style>