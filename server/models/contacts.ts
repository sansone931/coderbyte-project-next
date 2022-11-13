import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Contacts extends Model {
  @Column({
    allowNull: false,
  })
  firstName!: string;

  @Column({
    allowNull: false,
  })
  lastName!: string;

  @Column({
    allowNull: false,
    validate: {
      is: /^[0-9]{9}$/g,
    },
  })
  phoneNumber!: string;
}
