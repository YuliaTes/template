<template>
    <div class="v-swiper">
        <swiper
            :slides-per-view="1"
            :slide-shadow="true"
            :modules="this.modules"
            navigation
            :grabCursor="true"
            :watchSlidesProgress="true"
            :effect="'creative'"
            :creativeEffect="{
                perspective: true,
                limitProgress: 2,
                shadowPerProgress: true,
                prev: {
                    shadow: true,
                    translate: [-90, -15, -350],
                    rotate: [0, 0, -5],
                },
                next: {
                    translate: [1000, 0, 0],
                },
            }"
            :pagination="{ clickable: true }"
        >
            <swiper-slide>
                <div class="slide-item rounded">
                    <h2 class="slide-title">List Title</h2>
                    <ul class="slide-list">
                        <li v-for="item in listItems" :key="item" class="slide-list-item">{{ item }}</li>
                    </ul>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide-item rounded">
                    <v-swiper-cards></v-swiper-cards>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide-item rounded d-flex flex-column justify-content-center">
                    <h2>Start Using It Now</h2>
                    <div class="slide-item-btn-wrapper">
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import vSwiperCards from './v-swiper-cards'

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import { Navigation, Pagination, EffectCreative } from 'swiper';

import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

export default {
    data() {
        return {
            listItems: ['Lorem ipsum dolor sit amet', 'Quisque quis massa faucibus', 'Praesent congue lacus in sem', 'In egestas erat ut accumsan', 'In aliquam lectus vitae tortor', 'Sed vestibulum diam nec', 'Ut eu metus in tortor finibus', 'Sed eu orci vel ligula congue', 'Proin congue ipsum lacinia', 'Donec sagittis neque et diam', 'Aliquam dapibus lorem eu ipsum', 'Morbi id metus sit amet lacus', 'Aenean tristique purus', 'Sed in erat sagittis']
        }
    },
    name: 'v-swiper',
    components: {
        Swiper,
        SwiperSlide,
        vSwiperCards
    },
    setup() {
        return {
            modules: [Pagination, Navigation, EffectCreative],
        };
    },
};
</script>

<style lang="scss">
.v-swiper {
    overflow: hidden;
    .swiper {
        overflow: visible;
        margin: 100px auto;
        max-width: 650px;
        width: 100%;
        color: #018d73;

        .swiper-button-next,
        .swiper-button-prev {
            color: #fff;
        }

        .swiper-pagination {
            bottom: -50px;

            .swiper-pagination-bullet {
                background: #fff;
            }
        }

        .slide-item {
            max-width: 500px;
            width: 100%;
            min-height: 300px;
            height: 100%;
            background-color: #c4fff4;
            margin: 0 auto;

            .slide-title {
                padding: 20px 0;
            }
            .slide-list {
                column-count: 2;
                font-size: 16px;
                text-align: start;
                @media (max-width: 666px) {
                    column-count: 1;
                    text-align: center;
                }
            }
            .btn-primary {
                background-color: #018d73;
                border: #018d73;
            }
        }
        .swiper-slide-shadow {
            max-width: 500px;
            width: 100%;
            min-height: 300px;
            height: 100%;
            transform: translateX(-50%);
            left: 50%;
        }
    }
}
</style>


