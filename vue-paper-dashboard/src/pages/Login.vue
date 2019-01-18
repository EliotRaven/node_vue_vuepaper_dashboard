<template>
    <div id="login">
        <div class="login-left">
            <div class="d-flex flex-row flex-wrap">
                <img class="align-self-center d-bg" src="../assets/img/login-page/squares-background.svg" alt="bg">
                <img class="align-self-center m-bg" src="../assets/img/login-page/background-with-squares.svg" alt="bg">
                <div class="title-block">
                    <h1>data<span class="text-warning">cue</span></h1>
                    <p>Automatically personalize your <br> website & enail to each visitor</p>
                </div>
            </div>
        </div>
        <div class="login-right">
            <div class="sign-up">Don't have an account? <a href="#" class="text-warning">Sign Up</a></div>
            <div class="form-header">
                <img src="../assets/img/login-page/plants-left.svg" alt="plant-left">
                <h3>Sign in to DataCue</h3>
            </div>
            <div class="form-box">
                <form @submit.prevent >

                    <fg-input type="email"
                              label="Email"
                              v-model="user.email">
                    </fg-input>

                    <div class="form-group-box">
                        <div class="show-password" @click="showPass">
                            <i class="ti-eye"></i>
                            Show password
                        </div>
                        <fg-input :type="show ? 'text' : 'password'"
                                  label="Password"
                                  v-model="user.password">
                        </fg-input>
                    </div>

                    <div class="btn-box">
                        <p-button @click.native.prevent="submit" class="bg-warning">Login</p-button>
                        <img src="../assets/img/login-page/plants-right.svg" alt="plants-right">
                    </div>

                </form>
            </div>
            <div class="footer">2019 All Rights Reserved to DataCue</div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data(){
            return {
                user: {
                    email: null,
                    password: null,
                },
                show: false
            }
        },
        computed: mapState(['auth']),
        methods: {
            ...mapActions(['login']),
            async submit(){
                await this.login(this.user)
            },
            showPass(){
                this.show = !this.show
            }
        },
        watch: {
            auth(current, prevent){
                (current) ? this.$router.push('/') : this.$router.push('/auth/login')
            }
        }
    }
</script>

<style lang="scss">

</style>