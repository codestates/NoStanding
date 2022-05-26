import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Reservation, ReservationId } from './Reservation';

export interface NotificationAttributes {
  id: number;
  reservation_id: number;
  contents?: string;
  read?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type NotificationPk = "id";
export type NotificationId = Notification[NotificationPk];
export type NotificationOptionalAttributes = "id" | "contents" | "read" | "createdAt" | "updatedAt";
export type NotificationCreationAttributes = Optional<NotificationAttributes, NotificationOptionalAttributes>;

export class Notification extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
  id!: number;
  reservation_id!: number;
  contents?: string;
  read?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Notification belongsTo Reservation via reservation_id
  reservation!: Reservation;
  getReservation!: Sequelize.BelongsToGetAssociationMixin<Reservation>;
  setReservation!: Sequelize.BelongsToSetAssociationMixin<Reservation, ReservationId>;
  createReservation!: Sequelize.BelongsToCreateAssociationMixin<Reservation>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Notification {
    return Notification.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reservation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reservation',
        key: 'id'
      }
    },
    contents: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    read: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Notification',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_Notification_Reservation1_idx",
        using: "BTREE",
        fields: [
          { name: "reservation_id" },
        ]
      },
    ]
  });
  }
}
