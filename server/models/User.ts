import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Bookmark, BookmarkId } from './Bookmark';
import type { Reservation, ReservationId } from './Reservation';
import type { Review, ReviewId } from './Review';

export interface UserAttributes {
  id: number;
  userId: string;
  password: string;
  nickname: string;
  phoneNumber: string;
  email: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "id" | "createdAt" | "updatedAt";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  userId!: string;
  password!: string;
  nickname!: string;
  phoneNumber!: string;
  email!: string;
  profile!: string;
  createdAt!: Date;
  updatedAt!: Date;

  // User hasMany Bookmark via user_id
  Bookmarks!: Bookmark[];
  getBookmarks!: Sequelize.HasManyGetAssociationsMixin<Bookmark>;
  setBookmarks!: Sequelize.HasManySetAssociationsMixin<Bookmark, BookmarkId>;
  addBookmark!: Sequelize.HasManyAddAssociationMixin<Bookmark, BookmarkId>;
  addBookmarks!: Sequelize.HasManyAddAssociationsMixin<Bookmark, BookmarkId>;
  createBookmark!: Sequelize.HasManyCreateAssociationMixin<Bookmark>;
  removeBookmark!: Sequelize.HasManyRemoveAssociationMixin<Bookmark, BookmarkId>;
  removeBookmarks!: Sequelize.HasManyRemoveAssociationsMixin<Bookmark, BookmarkId>;
  hasBookmark!: Sequelize.HasManyHasAssociationMixin<Bookmark, BookmarkId>;
  hasBookmarks!: Sequelize.HasManyHasAssociationsMixin<Bookmark, BookmarkId>;
  countBookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Reservation via user_id
  Reservations!: Reservation[];
  getReservations!: Sequelize.HasManyGetAssociationsMixin<Reservation>;
  setReservations!: Sequelize.HasManySetAssociationsMixin<Reservation, ReservationId>;
  addReservation!: Sequelize.HasManyAddAssociationMixin<Reservation, ReservationId>;
  addReservations!: Sequelize.HasManyAddAssociationsMixin<Reservation, ReservationId>;
  createReservation!: Sequelize.HasManyCreateAssociationMixin<Reservation>;
  removeReservation!: Sequelize.HasManyRemoveAssociationMixin<Reservation, ReservationId>;
  removeReservations!: Sequelize.HasManyRemoveAssociationsMixin<Reservation, ReservationId>;
  hasReservation!: Sequelize.HasManyHasAssociationMixin<Reservation, ReservationId>;
  hasReservations!: Sequelize.HasManyHasAssociationsMixin<Reservation, ReservationId>;
  countReservations!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Review via user_id
  Reviews!: Review[];
  getReviews!: Sequelize.HasManyGetAssociationsMixin<Review>;
  setReviews!: Sequelize.HasManySetAssociationsMixin<Review, ReviewId>;
  addReview!: Sequelize.HasManyAddAssociationMixin<Review, ReviewId>;
  addReviews!: Sequelize.HasManyAddAssociationsMixin<Review, ReviewId>;
  createReview!: Sequelize.HasManyCreateAssociationMixin<Review>;
  removeReview!: Sequelize.HasManyRemoveAssociationMixin<Review, ReviewId>;
  removeReviews!: Sequelize.HasManyRemoveAssociationsMixin<Review, ReviewId>;
  hasReview!: Sequelize.HasManyHasAssociationMixin<Review, ReviewId>;
  hasReviews!: Sequelize.HasManyHasAssociationsMixin<Review, ReviewId>;
  countReviews!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return User.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    profile: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'User',
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
    ]
  });
  }
}
