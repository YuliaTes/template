<template>
    <div class="v-form shadow rounded container-xl" data-aos="fade-right" data-aos-duration="2000">
        <div class="form__wrapper row">
            <div class="form__block col">
                <div class="form__block-wrapper">
                    <div class="form__switch btn-group" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            class="switch__tab btn btn-light"
                            @click="myFilter"
                            :class="{ active: isActive1 }"
                        >Sign Up</button>

                        <button
                            type="button"
                            class="switch__tab btn btn-light"
                            @click="myFilter"
                            :class="{ active: isActive2 }"
                        >Sign In</button>
                    </div>

                    <div v-show="isActive1" class="form__signup">
                        <form
                            ref="form_signup"
                            action
                            class="needs-validation"
                            :class="{ 'was-validated': isValidUp }"
                            novalidate
                            @submit="validation_signup"
                        >
                            <input
                                class="form-control"
                                type="text"
                                name="userName"
                                placeholder="User name"
                                v-model="userName"
                                required
                            />
                            <input
                                class="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                                v-model="email"
                                required
                            />
                            <input
                                class="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                v-model="password"
                                required
                            />
                            <select class="form-select" name id required>
                                <option value>Choose your city</option>
                                <option value="1">Kyiv</option>
                                <option value="2">Kharkiv</option>
                                <option value="3">Lviv</option>
                                <option value="4">Odessa</option>
                            </select>

                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value
                                    id="flexCheckDefault"
                                    required
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckDefault"
                                >Terms checkbox</label>
                            </div>

                            <button class="btn btn-light" @click="signUp">Sign Up</button>
                        </form>
                        <p class="form__tosign-in">
                            Already have an account?
                            <a @click="myFilter" href>Sign In</a>
                        </p>
                    </div>

                    <div v-show="isActive2" class="form__signin">
                        <form
                            ref="form_signin"
                            action
                            class="needs-validation"
                            :class="{ 'was-validated': isValidIn }"
                            novalidate
                            @submit="validation_signin"
                        >
                            <input
                                class="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                                v-model="email"
                                required
                            />
                            <input
                                class="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                v-model="password"
                                required
                            />
                            <button class="btn btn-light" @click="signIn">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="form__background col">
                <div class="background__img rounded"></div>
            </div>
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
    name: 'v-form',
    data() {
        return {
            userName: '',
            email: '',
            password: '',
            auth: false,
            isActive1: true,
            isActive2: false,
            isValidUp: false,
            isValidIn: false,

        }
    },
    methods: {
        myFilter(event) {
            event.preventDefault()
            if (this.isActive1 == false) {
                this.isActive1 = !this.isActive1;
                this.isActive2 = false;
            } else {
                this.isActive1 = false;
                this.isActive2 = !this.isActive2;
            }
        },
        validation_signup(event) {
            if (!this.$refs.form_signup.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.isValidUp = true;
        },
        validation_signin(event) {
            if (!this.$refs.form_signin.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.isValidIn = true;
        },
        signUp(event) {
            const main = useUserStore();

            if (this.email != '' && this.password != '') {

                if (this.$refs.form_signup.checkValidity()) {
                    localStorage.setItem('userName', this.userName);
                    localStorage.setItem('email', this.email);
                    localStorage.setItem('password', this.password);

                    this.isActive1 = false;
                    this.isActive2 = !this.isActive2;

                    main.addUserData(this.userName, this.email, this.password);
                    event.preventDefault();
                }
            }
        },
        signIn(event) {
            const main = useUserStore();
            if (this.$refs.form_signin.checkValidity()) {
                event.preventDefault();
                if (main.email != '' && main.password != '') {
                    this.$router.push('user');
                } else {
                    this.isActive1 = true;
                    this.isActive2 = !this.isActive2;
                }
            }
        }
    },

    beforeCreate() {
        const main = useUserStore();
        if (localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
            main.email = localStorage.getItem('email');
            main.password = localStorage.getItem('password');
            this.auth = true;
            if (main.email != null && main.password != null) {
                this.$router.push('/user');
            }
        } else {
            this.auth = false;
        }
    },
}
</script>

<style lang="scss">
.v-form {
    display: block;
    background-color: #57c5cb;
    margin: 100px auto;

    .form__wrapper {
        @media (max-width: 768px) {
            position: relative;
        }
        .form__block {
            @media (max-width: 768px) {
                z-index: 10;
            }
            .form__block-wrapper {
                padding: 40px 80px;
                @media (max-width: 666px) {
                    padding: 40px 20px;
                }
            }
            .form__switch {
                margin: 0 0 20px;

                .switch__tab {
                    opacity: 0.5;
                }

                .switch__tab.active {
                    opacity: 1;
                }
            }
            input,
            select {
                margin-bottom: 10px;
            }

            .form-check-input {
                float: none;
                margin-right: 5px;
            }

            .form__tosign-in {
                font-size: 16px;
                margin-top: 10px;
            }
        }
        .form__background {
            padding: 0;
            @media (max-width: 768px) {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                opacity: 0.5;
            }
            .background__img {
                height: 100%;
                width: 100%;
                background: url(https://cdn5.vectorstock.com/i/1000x1000/24/29/abstract-teal-geometric-triangle-background-vector-8312429.jpg);
            }
        }
    }
}
</style>