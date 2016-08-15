# 接口相关
约定格式 如果成功则返回json{type:true,data:"消息"} 如果失败则返回json({type:false,data:"消息"})

# 登陆
post /login

## body 附加参数
1. loginName
2. passWord

## 成功
1. user:user.name
2. token:token

# 注册
post /signup

## body 附加参数
1. name(唯一值)
2. pw
3. email

## 成功
1.data:用户名
