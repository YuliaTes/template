<template>
    <div class="v-swiper-cards">
        <swiper
            :slide-shadow="false"
            :effect="'cards'"
            :cardsEffect="{
                slideShadows: false
            }"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
            :pagination="{ clickable: true }"
        >
            <swiper-slide>
                <div class="swiper-card rounded">
                    <img class="rounded" src="../assets/images/nature-1.jpg" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-card rounded">
                    <img class="rounded" src="../assets/images/nature-2.jpg" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-card rounded">
                    <img class="rounded" src="../assets/images/nature-3.jpg" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-card rounded">
                    <img class="rounded" src="../assets/images/nature-4.jpg" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-card rounded">
                    <img class="rounded" src="../assets/images/nature-5.jpg" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import { Pagination, EffectCards } from 'swiper';

import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

export default {
    name: 'v-swiper-cards',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, EffectCards],
        };
    },
};
</script>

<style lang="scss">
.swiper-cards-title {
    white-space: nowrap;
    text-align: center;
}
.v-swiper-cards {
    padding: 20px;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;

    .swiper.swiper-cards {
        margin: 0;
    }

    .mySwiper {
        height: 100%;
        width: 100%;
        .swiper-card {
            width: 150px;
            height: 200px;
            background-color: aqua;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>