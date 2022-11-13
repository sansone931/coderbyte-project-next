import { Sequelize } from 'sequelize-typescript';

import { Contacts } from './models/contacts';

export const connectToDatabase = () =>
  new Sequelize({
    dialect: 'mysql',
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
