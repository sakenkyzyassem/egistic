<template>
    <div>
        <div class="Cover">
            <div class="text-center p-4 text-white">
                <div class="container">
                    <p>Egistic</p>
                    <h1>Cистема управления хозяйством для сельхозтоваропроизводителей и консультантов в области сельского хозяйства.</h1>
                    <h1>Настало время менять систему агробизнеса.</h1>
                    <b-button variant="primary">
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
            <stick
                v-for="(stick, index) in sticks"
                :headers="[`Шаг ${index+1}`, stick.title]"
                :text="stick.details"
                :key="index"
            ></stick>
        </div>

        <div class="services py-5">
            <div class="row">
                <h1 class="col offset-1">Наши услуги:</h1>
            </div>
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
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Stick from '../components/Stick.vue';

@Component({
    components: {
        Stick,
    },
})
export default class Main extends Vue {
    // @Prop({required: false, type: String, default: 'Developer'}) readonly job: string

    private sticks: Info[] = [
        {
            title: 'Зарегистрируйтесь',
            details: 'Пройдите регистрацию с помощью Вашей электронной почты. Введите кадастровый номер Вашего поля или загрузите границы Ваших полей. Получите 14 дней бесплатного пользования.',
        },
        {
            title: 'Купите подписку',
            details: 'Годовая подписка стоимостью 30 тенге за 1 га. Получайте обработанные космические снимки Ваших полей каждые 3- 5 дней по индексам вегетации, влажности, азота и хлорофилла поверхности почвы и в листьях растений.',
        },
        {
            title: 'Анализируйте',
            details: 'Годовая подписка стоимостью 30 тенге за 1 га. Получайте обработанные космические снимки Ваших полей каждые 3- 5 дней по индексам вегетации, влажности, азота и хлорофилла поверхности почвы и в листьях растений.',
        },
    ];

    private servicesCards: Info[] = [
        {
            title: 'satellite',
            details: 'Спутниковые снимки полей',
        },
        {
            title: 'before-after',
            details: 'Состояние посевов до и после',
        },
        {
            title: {
                icon: 'jusan',
                fill: true,
            },
            details: 'Планирование севооборота',
        },
        {
            title: {
                icon: 'telematics',
                fill: true,
            },
            details: 'Телематика: GPS мониторинг техники, уровень топлива, наполнение бункера',
        },
        {
            title: 'box-correct',
            details: 'Управление агромероприятиями',
        },
        {
            title: {
                icon: 'sun-clouds',
                fill: true,
                color: '#1C1C1C r-#1C1C1C',
            },
            details: 'Погода: прогноз на 9 дней вперед в радиусе 20 км',
        },
        {
            title: 'chemical-tube',
            details: 'Агрохим анализ почвы',
        },
        {
            title: {
                icon: 'analytics',
                fill: true,
                color: '#1C1C1C r-#1C1C1C',
            },
            details: 'Аналитика: засоренность, кривая вегетации, проблемные зоны',
        },
        {
            title: 'people',
            details: 'Подключение агро консультантов',
        },
        {
            title: 'farm',
            details: 'Агроскаутинг',
        },
    ];
}
</script>

<style lang="scss" scoped>

h1 {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.02em;
}

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
        font-family: Rubik;
        font-size: 36px;
        font-weight: 700;
        line-height: 43px;
        letter-spacing: 0em;

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
    font-family: Rubik;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
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
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;

            box-shadow: 0px 0px 30px 0px #ABAEA3 20%;
        }
    }
}

</style>