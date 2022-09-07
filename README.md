#### oak-server
### 这是一个Deno项目 20220822

1. 初步搭建项目框架
api 存放接口文件
config 存放配置文件
middlewares 存放中间件
plugins 存放插件
test 存放测试用例
utils 存放工具类
app.ts 启动文件
README.md 说明文件

2. 使用说明
-- 环境部署
Deno 安装 https://deno.land/#installation

-- 运行指令
deno run --allow-net app.ts

--  mysql 镜像运行指令
docker container run -d -p 3306:3306 --name mysqlserver -v /Users/xxx/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql

-- redis 镜像运行指令 (可以用redis.conf)
这里仅仅用指令配置了端口
docker run -d -p 6379:6379 redis

# 持续补充中...