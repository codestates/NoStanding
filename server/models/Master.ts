import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Master_address, Master_addressId } from './Master_address';
import type { Shop, ShopId } from './Shop';

export interface MasterAttributes {
  id: number;
  masterId?: string;
  shop_Id?: number;
  password?: string;
  nickname?: string;
  phoneNumber?: string;
  shopName?: string;
  address?: string;
  email?: string;
  profile?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MasterPk = "id";
export type MasterId = Master[MasterPk];
export type MasterOptionalAttributes = "id" | "masterId" | "shop_Id" | "password" | "nickname" | "phoneNumber" | "shopName" | "address" | "email" | "profile" | "createdAt" | "updatedAt";
export type MasterCreationAttributes = Optional<MasterAttributes, MasterOptionalAttributes>;

export class Master extends Model<MasterAttributes, MasterCreationAttributes> implements MasterAttributes {
  id!: number;
  masterId?: string;
  shop_Id?: number;
  password?: string;
  nickname?: string;
  phoneNumber?: string;
  shopName?: string;
  address?: string;
  email?: string;
  profile?: string;
  createdAt!: Date;
  updatedAt!: Date;

  // Master hasMany Master_address via master_id
  Master_addresses!: Master_address[];
  getMaster_addresses!: Sequelize.HasManyGetAssociationsMixin<Master_address>;
  setMaster_addresses!: Sequelize.HasManySetAssociationsMixin<Master_address, Master_addressId>;
  addMaster_address!: Sequelize.HasManyAddAssociationMixin<Master_address, Master_addressId>;
  addMaster_addresses!: Sequelize.HasManyAddAssociationsMixin<Master_address, Master_addressId>;
  createMaster_address!: Sequelize.HasManyCreateAssociationMixin<Master_address>;
  removeMaster_address!: Sequelize.HasManyRemoveAssociationMixin<Master_address, Master_addressId>;
  removeMaster_addresses!: Sequelize.HasManyRemoveAssociationsMixin<Master_address, Master_addressId>;
  hasMaster_address!: Sequelize.HasManyHasAssociationMixin<Master_address, Master_addressId>;
  hasMaster_addresses!: Sequelize.HasManyHasAssociationsMixin<Master_address, Master_addressId>;
  countMaster_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // Master hasMany Shop via master_Id
  Shops!: Shop[];
  getShops!: Sequelize.HasManyGetAssociationsMixin<Shop>;
  setShops!: Sequelize.HasManySetAssociationsMixin<Shop, ShopId>;
  addShop!: Sequelize.HasManyAddAssociationMixin<Shop, ShopId>;
  addShops!: Sequelize.HasManyAddAssociationsMixin<Shop, ShopId>;
  createShop!: Sequelize.HasManyCreateAssociationMixin<Shop>;
  removeShop!: Sequelize.HasManyRemoveAssociationMixin<Shop, ShopId>;
  removeShops!: Sequelize.HasManyRemoveAssociationsMixin<Shop, ShopId>;
  hasShop!: Sequelize.HasManyHasAssociationMixin<Shop, ShopId>;
  hasShops!: Sequelize.HasManyHasAssociationsMixin<Shop, ShopId>;
  countShops!: Sequelize.HasManyCountAssociationsMixin;
  // Master belongsTo Shop via shop_Id
  shop!: Shop;
  getShop!: Sequelize.BelongsToGetAssociationMixin<Shop>;
  setShop!: Sequelize.BelongsToSetAssociationMixin<Shop, ShopId>;
  createShop!: Sequelize.BelongsToCreateAssociationMixin<Shop>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Master {
    return Master.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    masterId: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shop_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Shop',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shopName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    profile: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Master',
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
        name: "fk_Master_Shop_idx",
        using: "BTREE",
        fields: [
          { name: "shop_Id" },
        ]
      },
    ]
  });
  }
}
