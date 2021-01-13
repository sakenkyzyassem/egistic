<template>
    <div class="Logo">
        <svg-icon icon="egistic" :height="height" color="#4B970F" fill="#4B970F"></svg-icon>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'Logo',
})
export default class Logo extends Vue {
    @Prop({ default: '2em', type: String}) private height: string | undefined;
}
</script>