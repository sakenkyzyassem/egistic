<template>
    <div class="p-3">
        <div class="stick">
            <template v-for="(header, index) in headers">
                <h1 :key="index">
                    {{ header }}
                </h1>
            </template>
            <p>{{ text }}</p>
        </div>
        <img class="stick-shadow" src="../assets/shadow.png" alt="" width="360px" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'Stick',
})
export default class Stick extends Vue {
    @Prop({ default: [] }) private readonly headers!: string[];
    @Prop({ default: '' }) private readonly text!: string;
}
</script>

<style lang="scss">
.stick {
    position: relative;
    width: 360px;
    height: 360px;
    text-align: center;
    align-content: space-around;
    background-color: #F6F7F3;
    z-index: 1;
    padding: 24px 40px;

    h1 {
        font-family: Rubik;
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        line-height: 28px;
        letter-spacing: -0.02em;

        margin: 12px 0;
    }

    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;

        margin: 12px 0;
    }
}

.stick-shadow {
    position: relative;
    transform: translateY(-50%);
    z-index: 0;
}
</style>