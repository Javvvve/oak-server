// 生产用配置文件

const remoteConf = {
  // 配置常用的远程接口配置
}

const mysqlConf = {
  // 配置mysql基本信息
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'auth_db',
}

export const PROD_CONFIG = {
  mysqlConf,
};