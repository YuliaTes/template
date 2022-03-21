import { defineStore } from "pinia";

export const useUserStore = defineStore("main", {
    state: () => ({
        userName:'',
        email:'',
        password:''
    }),
    actions: {
        reset() {
            this.userName = '';
            this.email = '';
            this.password = '';
        },
        addUserData (userName, email, password){
            this.userName = userName;
            this.email = email;
            this.password = password;
        },
    }
})