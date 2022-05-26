import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ReReview, ReReviewId } from './ReReview';
import type { Shop, ShopId } from './Shop';
import type { User, UserId } from './User';

export interface ReviewAttributes {
  id: number;
  user_id: number;
  image_src?: any;
  score?: string;
  contents?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Shop_id: number;
}

export type ReviewPk = "id";
export type ReviewId = Review[ReviewPk];
export type ReviewOptionalAttributes = "id" | "image_src" | "score" | "contents" | "createdAt" | "updatedAt";
export type ReviewCreationAttributes = Optional<ReviewAttributes, ReviewOptionalAttributes>;

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  id!: number;
  user_id!: number;
  image_src?: any;
  score?: string;
  contents?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Shop_id!: number;

  // Review hasMany ReReview via review_id
  ReReviews!: ReReview[];
  getReReviews!: Sequelize.HasManyGetAssociationsMixin<ReReview>;
  setReReviews!: Sequelize.HasManySetAssociationsMixin<ReReview, ReReviewId>;
  addReReview!: Sequelize.HasManyAddAssociationMixin<ReReview, ReReviewId>;
  addReReviews!: Sequelize.HasManyAddAssociationsMixin<ReReview, ReReviewId>;
  createReReview!: Sequelize.HasManyCreateAssociationMixin<ReReview>;
  removeReReview!: Sequelize.HasManyRemoveAssociationMixin<ReReview, ReReviewId>;
  removeReReviews!: Sequelize.HasManyRemoveAssociationsMixin<ReReview, ReReviewId>;
  hasReReview!: Sequelize.HasManyHasAssociationMixin<ReReview, ReReviewId>;
  hasReReviews!: Sequelize.HasManyHasAssociationsMixin<ReReview, ReReviewId>;
  countReReviews!: Sequelize.HasManyCountAssociationsMixin;
  // Review belongsTo Shop via Shop_id
  Shop!: Shop;
  getShop!: Sequelize.BelongsToGetAssociationMixin<Shop>;
  setShop!: Sequelize.BelongsToSetAssociationMixin<Shop, ShopId>;
  createShop!: Sequelize.BelongsToCreateAssociationMixin<Shop>;
  // Review belongsTo User via user_id
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Review {
    return Review.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    image_src: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    score: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    contents: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Shop',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Review',
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
        name: "fk_Review_User1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_Review_Shop1_idx",
        using: "BTREE",
        fields: [
          { name: "Shop_id" },
        ]
      },
    ]
  });
  }
}
