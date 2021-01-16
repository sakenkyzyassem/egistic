<template>
    <div class="top-nav">
      <b-nav>
        <b-nav-item variant="link" href="tel:+7-702-977-4926">
            <svg-icon icon="phonesvg" height="19px"></svg-icon>
          +7 702 977 4926
        </b-nav-item>

        <div class="ml-auto">
            <b-button
                variant="light"
                @click="alertMe('Sign in')"
            >
            <svg-icon icon="person" height="19px" :fill="false" color="#1C1C1C r-#1C1C1C"></svg-icon>
            Войти в кабинет</b-button>
            <b-button
                variant="primary"
                @click="alertMe('Sign up')"
            >Зарегистрироваться</b-button>
        </div>

      </b-nav>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'top-nav',
})
export default class TopNav extends Vue {
    private alertMe(btn: string): void {
        alert('Alert was triggered by ' + btn);
    }
}
</script>

<style lang="scss">
@import '../App.scss'; 
.top-nav {
  align-content: center;
  padding: 16px;
  background-color: white;

  *{
    margin: 0 6px;
  }

  a {
      color: $dark;
  }
}
</style>