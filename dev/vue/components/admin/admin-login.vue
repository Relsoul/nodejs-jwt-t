<template>
   <div class="admin-login">
       <div class="container">
           <div class="row no-gutters">
               <div class="col s12">
                   <div class="card blue-grey darken-1">
                       <div class="card-content white-text ">
                           <p class="card-title center-align">登录</p>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input type="text" v-model="userName" id="admin-login-name" class="validate">
                                    <label for="admin-login-name">用户名</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input v-model="pw" type="password" id="admin-login-password" class="validate">
                                    <label for="admin-login-password">密码</label>
                                </div>
                            </div>

                       </div>
                       <div class="card-action center-align">
                           <button v-on:click="login" class="admin-login-btn waves-effect waves-light btn">登录</button>
                           <button class="admin-login-close waves-effect waves-light btn">取消</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>

   </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                pw:"",
                userName:""
            }
        },
        methods:{
            login:function(e){
                e.stopImmediatePropagation();
                $.post("/login",{loginName:this.userName,passWord:this.pw},function(data){
                    console.log(49,data)

                });
            }
        },
        components:{

        }
    }
</script>