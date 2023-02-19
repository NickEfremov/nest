import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'umbrellapassword1',
    database: 'my_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};
// host: process.env.HOST,
//     port: parseInt(process.env.PORT),
//     username: process.env.USERNAME,
//     password: process.env.PASSWORD,
    // database: process.env.DATABASE,
export default config;