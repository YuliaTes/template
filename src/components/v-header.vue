<template>
    <div class="v-header">
        <div class="header-wrapper container-xl">
            <header class="header d-flex justify-content-between">
                <div class="header-logo">
                    <img src="../assets/images/logo.png" />
                </div>
                <div class="header-buttons d-flex align-items-center">
                    <ul class="nav justify-content-around align-items-center">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Support</a>
                        </li>
                    </ul>
                </div>
                <div class="header-user d-flex align-items-center">
                    <div class="header-email">{{ main.email }}</div>
                    <div @click="showLogout" class="header-photo">
                        <img :src="src" />
                    </div>
                    <div class="header-logout" :class="{ active: isActive }" v-show="isActive">
                        <div class="logout-wrapper">
                            <button class="logout btn btn-light" @click="logout">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '../store/index'

export default {
    setup() {
        const main = useUserStore()
        const { counter, name } = main;
        return {
            main,
        }
    },
    name: 'v-header',
    data() {
        return {
            src: "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6",
            isActive: false,
        }
    },
    methods: {
        showLogout(event) {
            event.preventDefault()
            if (this.isActive == false) {
                this.isActive = !this.isActive;
            } else {
                this.isActive = false;
            }
        },
        logout() {
            const main = useUserStore()
            main.userName = main.email = main.password = null;
            localStorage.clear();
            this.$router.push('/');
        }
    },
    mounted() {
        const main = useUserStore();
        main.email = localStorage.getItem('email');
    },
}
</script>

<style lang="scss">
.v-header {
    display: block;
    background: #c4fff4;
    .header {
        padding: 20px;
        color: #018d73;

        @media (max-width: 666px) {
            flex-direction: column;
            align-items: center;
        }

        .header-logo {
            img {
                height: 100px;
                width: 100px;
            }
        }
        .header-buttons {
            margin-left: 160px;

            @media (max-width: 1024px) {
                margin-left: 0;
            }
            .nav-link {
                color: #018d73;
            }
            .nav-link:hover {
                color: #004e40;
            }
        }

        .header-user {
            position: relative;
            .header-email {
                font-size: 16px;
            }
            .header-photo {
                margin-left: 20px;
                img {
                    height: 80px;
                    width: 80px;
                    border-radius: 50%;
                }
            }

            .header-logout {
                position: absolute;
                bottom: -55px;
                right: 27px;
                .logout {
                    font-size: 20px;
                    color: #018d73;
                    border: 2px solid #004e40;
                }
                .logout::after {
                    content: "";
                    position: absolute;
                    left: 62px;
                    top: -20px;
                    border: 10px solid transparent;
                    border-top: 10px solid #004e40;
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>