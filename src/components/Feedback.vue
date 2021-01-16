<template>
    <div>
        <div class="feedback-item">
            <img :src="fb.user.avatar" :alt="fb.user.username" width="100" height="100" />
            <h1>{{ fb.user.username }}</h1>
            <h5 class="subtitle">{{ fb.user.jobTitle }}</h5>
            <p>{{ fb.feedback }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'feedback-item',
})
export default class FeedbackItem extends Vue {
    @Prop({default: {} }) private fb!: Feedback;
}
</script>

<style lang="scss">
.feedback-item {
    padding: 10px 10px;
    text-align: center;

    img {
        border-radius: 50%;
        border: #4B970F solid 3px;
        margin: 16px;
    }

    h1 {
        font-size: 14px;
        letter-spacing: 0em;
    }

    h5 {
        font-size: 14px;
        font-weight: 400;
    }

    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    }
</style>