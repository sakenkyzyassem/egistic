<template>
    <div>
        <div class="container text-center p-4">
            <h1>Egistic</h1>
            <h3>Cистема управления хозяйством для сельхозтоваропроизводителей и консультантов в области сельского хозяйства.</h3>
            <h2>Настало время менять систему агробизнеса.</h2>
            <b-button variant="primary">
                Подключиться бесплатно
            </b-button>
        </div>
        <div style="height: 60vh">
            <p></p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
    // @Prop({required: false, type: String, default: 'Developer'}) readonly job: string
}
</script>