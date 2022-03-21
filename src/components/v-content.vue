<template>
    <div
        class="v-content shadow rounded container-xl"
        data-aos="fade-left"
        data-aos-duration="2000"
    >
        <div class="content__title row">
            <h1>Title</h1>
            <h2>Subtitle</h2>
            <p>Title description</p>
        </div>
        <div class="content row">
            <div class="content__background col">
                <div class="background-wrapper rounded"></div>
            </div>
            <div class="content__text col">
                <div
                    class="content__text-wrapper"
                >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-content',
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
.v-content {
    display: block;
    background-color: #8ad290;
    margin-bottom: 100px;

    h1 {
        margin-top: 20px;
    }

    .content {
        @media (max-width: 768px) {
            position: relative;
        }

        .content__background {
            padding: 0;
            @media (max-width: 768px) {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                opacity: 0.4;
            }

            .background-wrapper {
                height: 100%;
                width: 100%;
                background: url(https://t4.ftcdn.net/jpg/02/24/10/81/360_F_224108182_E2mWpgKGzGPqbDEywvx9hrOnuoMyf9ej.jpg);
            }
        }

        .content__text-wrapper {
            padding: 40px;

            @media (max-width: 666px) {
                padding: 40px 20px;
            }
        }
    }
}
</style>