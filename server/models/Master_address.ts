import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Master, MasterId } from './Master';

export interface Master_addressAttributes {
  id: number;
  MasterId?: string;
  master_id: number;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  postal_code?: string;
  country?: string;
}

export type Master_addressPk = "id";
export type Master_addressId = Master_address[Master_addressPk];
export type Master_addressOptionalAttributes = "id" | "MasterId" | "address_line1" | "address_line2" | "city" | "postal_code" | "country";
export type Master_addressCreationAttributes = Optional<Master_addressAttributes, Master_addressOptionalAttributes>;

export class Master_address extends Model<Master_addressAttributes, Master_addressCreationAttributes> implements Master_addressAttributes {
  id!: number;
  MasterId?: string;
  master_id!: number;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  postal_code?: string;
  country?: string;

  // Master_address belongsTo Master via master_id
  master!: Master;
  getMaster!: Sequelize.BelongsToGetAssociationMixin<Master>;
  setMaster!: Sequelize.BelongsToSetAssociationMixin<Master, MasterId>;
  createMaster!: Sequelize.BelongsToCreateAssociationMixin<Master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Master_address {
    return Master_address.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MasterId: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    master_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Master',
        key: 'id'
      }
    },
    address_line1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    address_line2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Master_address',
    timestamps: false,
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
        name: "fk_Master_address_Master1_idx",
        using: "BTREE",
        fields: [
          { name: "master_id" },
        ]
      },
    ]
  });
  }
}
