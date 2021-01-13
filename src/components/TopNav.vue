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
                @click="signin"
            >
            <svg-icon icon="person" height="19px" fill="none"></svg-icon>
            Войти в кабинет</b-button>
            <b-button
                variant="primary"
                @click="signup"
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
    private signin(): void {
        alert('Clicked SignIn');
        return;
    }

    private signup(): void {
        alert('Clicked SignUp');
        return;
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