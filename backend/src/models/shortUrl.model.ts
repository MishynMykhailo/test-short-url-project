import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class shortUrlModel extends Model {
  @Column
  originalUrl: string;

  @Column
  shortUrl: string;
}
