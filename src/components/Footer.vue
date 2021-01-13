<template>
    <footer class="fluid px-5 py-3 footer">
      <b-row class="m-1 my-2">
        <logo :height="56" ></logo>
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
              <li v-for="(icon, index) in footerIcons" :key="index">
                <a :href="icon.to" target="_blank">
                  <svg-icon
                  :icon="icon.title"
                  width="24"
                  height="24"
                  color="white"
                  ></svg-icon>
                </a>
              </li>
            </ul>
          </b-row>
        </b-col>
      </b-row>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Logo from './Logo.vue';

@Component({
    name: 'MainFooter',
    components: {
        Logo,
    },
})
export default class MainFooter extends Vue {
    private footerIcons: ELink[] = [
    {
      title: 'fb',
      to: 'https://www.facebook.com/egistickz/',
    },
    {
      title: 'insta',
      to: 'https://www.instagram.com/egistic.kz/',
    },
    {
      title: 'tele',
      to: 'https://t.me/egistickz',
    },
    {
      title: 'whatsapp',
      to: 'https://wa.me/77029774926',
    },
  ];

  private navLogoHeight: string = '56px';
}
</script>

<style lang="scss">
@import '../App.scss';
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