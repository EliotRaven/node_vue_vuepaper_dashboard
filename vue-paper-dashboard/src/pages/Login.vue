<template>
    <div id="login" class="container pt-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <card class="card" title="Sign In">
                    <form @submit.prevent >
                        <div class="row">
                            <div class="col-12">
                                <fg-input type="email"
                                          label="Username"
                                          placeholder="Email"
                                          v-model="user.email">
                                </fg-input>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <fg-input type="password"
                                          label="Password"
                                          placeholder="password"
                                          v-model="user.password">
                                </fg-input>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <p-button round
                                          @click.native.prevent="submit" >
                                    submit
                                </p-button>
                            </div>
                        </div>

                        <div class="clearfix"></div>
                    </form>
                </card>
            </div>
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
                }
            }
        },
        computed: mapState(['auth']),
        methods: {
            ...mapActions(['login']),
            async submit(){
                await this.login(this.user)
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