<template>
    <div>
        <div class="Cover">
            <div class="text-center p-4 text-white">
                <div class="container">
                    <p class="title">Egistic</p>
                    <h1>Cистема управления хозяйством для сельхозтоваропроизводителей и консультантов в области сельского хозяйства.</h1>
                    <h1>Настало время менять систему агробизнеса.</h1>
                    <b-button variant="primary" @click="alertMe('Подключиться бесплатно')">
                        Подключиться бесплатно
                    </b-button>
                </div>
            </div>
        </div>
        
        <div class="views row p-5 mx-auto">
            <div class="col-sm-12 col-md-6 p-4 mx-auto">
                <img src="../assets/tablet.png" alt="tablet view" />
            </div>
            <div class="col-sm-12 col-md-6">
                <h1>Мобильность и эффективность. Egistic доступен:</h1>
                <ul>
                    <li>
                        <h1>Для компьютера</h1>
                    </li>
                    <li>
                        <h1>Для телефонов и планшетов Android</h1>
                    </li>
                    <li>
                        <h1>Для iPhone и iPad</h1>
                    </li>
                </ul>
            </div>
        </div>

        <div class="sticks row pt-4">
            <template v-for="(stick, index) in sticks">
                <stick
                    :key="index"
                    :headers="['Шаг '+ (index+1), stick.title]"
                    :text="stick.details"
                ></stick>
            </template>
        </div>

        <div class="services py-4">
            <h1 class="offset-1 title">Наши услуги:</h1>
            <div class="services-content">
                <b-card align="center m-3" v-for="(card, index) in servicesCards" :key="index">
                    <b-card-title>
                        <svg-icon
                            :icon="card.title.icon ? card.title.icon : card.title"
                            :height="card.title.height ? card.title.height : '28'"
                            :fill="card.title.fill ? card.title.fill : false"
                            :color="card.title.color ? card.title.color : '#1C1C1C'"
                        ></svg-icon>
                    </b-card-title>

                    <b-card-text>
                        {{ card.details }}
                    </b-card-text>
                </b-card>
            </div>
        </div>

        <div class="faq py-4">
            <h1 class="offset-1 title mb-3">Часто задаваемые вопросы:</h1>
            <p class="offset-1 subtitle mb-3">Если у Вас все еще остались вопросы, Вы можете позвонит по номеру +7 702 977 4926.</p>
            
            <div class="faq-content">
                <div no-body class="mb-3" v-for="(q, ind) in faqs" :key="ind">
                    <b-button
                        block
                        pill
                        v-b-toggle="'accordion-'+ind"
                        variant="light"
                        class="px-3"
                    >
                        {{ q.question }}
                        <svg-icon class="arrow mr-2 mt-2" icon="arrow-down" color="#000" :fill="false" width="10"></svg-icon>
                    </b-button>
                    <b-collapse :id="'accordion-'+ind" accordion="my-accordion" role="tabpanel">
                        <p class="my-3 mx-4">{{ q.answer }}</p>
                    </b-collapse>
                </div>
            </div>
        </div>

        <div class="feedback pt-4">
            <h1 class="offset-1 title mb-3">Отзывы клиентов</h1>

            <div class="feedback-content">
                <button @click="slidePrev">
                    <svg-icon icon="arrow-left" color="#000" :fill="false" width="12"></svg-icon>
                </button>
                <div class="feedback-scrollable">
                    <div
                        class="item"
                        v-for="(fb, index) in feedbacks"
                        :key="index"
                    >
                        <feedback-item :fb="fb" ></feedback-item>
                    </div>
                </div>
                <button @click="slideNext">
                    <svg-icon icon="arrow-right" color="#000" :fill="false" width="12"></svg-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Stick from '../components/Stick.vue';
import FeedbackItem from '../components/Feedback.vue';
import { faqs, feedbacks, servicesCards, sticks } from '@/api/data';

@Component({
    components: {
        Stick,
        FeedbackItem,
    },
})
export default class Main extends Vue {

    private sticks: Info[] = sticks;
    private servicesCards: Info[] = servicesCards;
    private faqs: QnA[] = faqs;
    private feedbacks: Feedback[] = feedbacks;

    private alertMe(btn: string): void {
        alert('Alert was triggered by ' + btn);
    }

    private slideNext(): void {
        const content = document.querySelector('.feedback-scrollable');
        if ( content ) {
            content.scrollLeft += (window.innerWidth / 4) ;
        }
    }

    private slidePrev(): void {
        const content = document.querySelector('.feedback-scrollable');
        if ( content ) {
            content.scrollLeft -= (window.innerWidth / 4) ;
        }
    }
}
</script>

<style lang="scss">
@import '../App.scss';

.Cover {
    background: url("../assets/cover.png") rgba(0,0,0, 0.3);
    background-blend-mode: multiply;
    background-position: 50%;
    background-size: cover;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;


    p {
        font-size: 36px;
        line-height: 43px;

        margin-bottom: 32px;
    }

    h1 {
        margin-bottom: 24px;
    }
}

.views {
    text-align: left;

    h1 {
        margin-bottom: 56px;
    }

    li{
        list-style: none;
        margin-bottom: 32px;

        h1{
            font-size: 16px;
            font-style: normal;
            letter-spacing: 0em;
        }
    }
}

.sticks {
    padding: 0 100px;
    background-color: white;
    justify-content: space-around;
}

.services {
    background-color: #F6F7F3;
    font-size: 24px;
    line-height: 28px;
    text-align: left;


    .services-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .card {
            flex: 1;
            border-radius: 24px;
            min-width: 280px;
            max-width: 280px;

            font-family: Inter;
            font-size: 16px;
            line-height: 24px;

            box-shadow: 0px 0px 30px 0px #ABAEA3 20%;
        }
    }
}

.faq {
    background-color: white;

    p {
        font-size: 16px;
        line-height: 24px;
    }

    .faq-content {
        width: 800px;
        margin: 0 auto;

        .btn {
            text-align: left;
            font-size: 16px;
            font-family: Inter;
            font-weight: 600;
            line-height: 24px;
        }

        .arrow {
            float: right;
        }

    }
}
.feedback {
    background-color: #F6F7F3;

    .feedback-content {
        height: 330px;
        display: flex;
        flex-direction: row;

        .feedback-scrollable {
            overflow-x: hidden;
            overflow-y: hidden;

            display: grid;
            grid-auto-flow: column;
            grid-template-columns: repeat(4, calc(25% - 15px));
            grid-auto-columns: calc(25% - 10px);
            scroll-behavior: smooth;
        }

        .item {
            -webkit-transition: margin-left 800ms ease-in-out;
            -moz-transition: margin-left 800ms ease-in-out;
            -o-transition: margin-left 800ms ease-in-out;
            -ms-transition: margin-left 800ms ease-in-out;
            transition: margin-left 800ms ease-in-out;
        }

        button {
            padding: 6px 10px;
            margin: auto 8px;
            border: none;
            border-radius: 50%;
            box-shadow: 0px 0px 13.3333px 6.66667px rgba(171, 174, 163, 0.15);
            background: rgb(255,255,255);
            align-self: center;
        }

    }
}

</style>