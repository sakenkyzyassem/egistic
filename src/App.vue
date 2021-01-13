<template>
  <div id="app">
    <!------------------------ Nav --------------------------------->
    <top-nav />

    <!------------------------ Main Nav ---------------------------->
    <b-navbar class="navbar" variant="dark" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav
          :justified="true"
          :fill="true"
          v-for="(item, index) in navItems"
          :key="index"
        >
              <b-navbar-brand
                v-if="item.isIcon"
                class="mb-0 center"
                :to="item.to"
              >
                  <logo :height="navLogoHeight"></logo>
              </b-navbar-brand>
              <b-navbar-item
                v-else
                :to="item.to"
              >
                <b-navbar-text>{{ item.title }}</b-navbar-text>
              </b-navbar-item> 
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!------------------------- Main Content ------------------------>
    <router-view></router-view>

    <!-------------------------- Footer ------------------------>
    <footer class="fluid px-5 py-3 footer">
      <b-row class="m-2">
        <h1>Egistic</h1>
      </b-row>
      <b-row>
        <b-col>
          <p>
            г. Нур-Султан, пр. Кабанбай батыра 53, Технопарк, офис 13.3
            <br>
            +77057393965
            <br>
            info@egistic.kz
          </p>
        </b-col>
        <b-col class="ml-auto">
          <b-row class="icons">
            <ul class="ml-auto">
              <li v-for="icon in footerIcons" :key="icon">
                <svg-icon
                :icon="icon"
                width="24"
                height="24"
                color="white"
                ></svg-icon>
              </li>
            </ul>
          </b-row>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TopNav from './components/TopNav.vue';
import Logo from './components/Logo.vue';


@Component({
  components: {
    TopNav,
    Logo,
  },
})
export default class App extends Vue {
  private navItems: NavItem[] = [
    {
      title: 'О нас',
      to: '/',
      isIcon: false,
    },
    {
      title: 'Услуги',
      to: '/',
      isIcon: false,
    },
    {
      title: 'Новости',
      to: '/',
      isIcon: false,
    },
    {
      title: '',
      to: '/',
      isIcon: true,
    },
    {
      title: 'Инструкции для пользователя',
      to: '/',
      isIcon: false,
    },
    {
      title: 'Часто задаваемые вопросы',
      to: '/',
      isIcon: false,
    },
  ];

  private footerIcons: string[] = [ 'fb', 'insta', 'tele', 'whatsapp' ];
  private navLogoHeight: string = '56px';
}
</script>

<style lang="scss">
@import './App.scss';
.navbar {
  width: 100%;
  margin: 0;
  padding: 0;
  height: 96px;
  color: $white;

  .navbar-nav {
    width: 100%;
  }
}

.footer {
  position: relative;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  background-color: $dark;
  color: $white;

  li {
    list-style: none;
    margin: 0 50px 0 0;
    display: inline-block;
  }
}
</style>
