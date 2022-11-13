import mysql2 from 'mysql2';
import { Sequelize } from 'sequelize-typescript';

import { Contacts } from './models/contacts';

export const connectToDatabase = () =>
  new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    host: process.env.MYSQLHOST,
    port: Number(process.env.MYSQLPORT),
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    logging: false,
    models: [Contacts],
  })
    .sync()
    .catch((err) => {
      console.log('Error', err);
    });
