'use strict';

import App from "./components/app.vue"
import admin from "./components/admin/admin.vue"
import adminLogin from "./components/admin/admin-login.vue"
import adminPage from "./components/admin/admin-page.vue"

let router=new VueRouter();

router.map({
    '/admin':{
        component:admin,
        subRoutes:{
            "/":{
                component:adminLogin
            },
            "/:id":{
                component:adminPage,
                adminAuth:true
            }
        }
    },
});

router.beforeEach((transition)=>{
    if(transition.to.adminAuth){
        // 判断登录 暂时
        //没有登录走下面逻辑
        let redirect=encodeURIComponent(transition.to.path);
        transition.redirect("/admin")
    }else{
        transition.next();
    }
});


router.start(App, '#app');



