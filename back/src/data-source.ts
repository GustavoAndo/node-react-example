import { DataSource } from "typeorm"
import "reflect-metadata"
import 'dotenv/config'
import { Compra } from './models/Compra'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
    database: "lista",
    synchronize: true,
    logging: false,
    entities: [Compra],
    migrations: [],
    subscribers: [],
})