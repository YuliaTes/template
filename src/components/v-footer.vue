<template>
    <footer class="v-footer">
        <div class="container-xl">
            <ul class="nav footer-wrapper justify-content-between align-items-center">
                <li class="nav-item logo-item">
                    <img src="../assets/images/logo.png" />
                </li>
                <div class="footer-items-wrapper d-flex">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page">Terms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">@2022 Company</a>
                    </li>
                </div>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'v-footer',
}
</script>

<style lang="scss">
.v-footer {
    display: block;
    background: #c4fff4;

    .footer-wrapper {
        padding: 20px;

        @media (max-width: 666px) {
            justify-content: center !important;
        }

        .logo-item {
            img {
                height: 100px;
                width: 100px;
            }
        }

        .nav-link {
            color: #018d73;
        }

        .nav-link:hover {
            color: #004e40;
        }
    }
}
</style>