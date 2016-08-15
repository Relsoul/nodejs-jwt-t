<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    import headerVr from "./header/header-vr.vue"
    import footerVr from "./footer/footer-vr.vue"

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            headerVr,
            footerVr
        }
    }
</script>
