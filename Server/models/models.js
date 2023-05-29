import sequelize from "../db.js";
import {DataTypes} from 'sequelize'

export const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(20), allowNull: false},
    email: {type: DataTypes.STRING(20), unique: true},
    phone: {type: DataTypes.INTEGER},
    address: {type: DataTypes.STRING(50), allowNull: false}
});

export const Shops = sequelize.define('Shops', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(20), allowNull: false}
});

export const Product = sequelize.define('Product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING(100), allowNull: false},
    price: {type: DataTypes.DECIMAL, defaultValue: 0},
    image: {type: DataTypes.STRING(200), allowNull: false}
});

// export const Carts = sequelize.define('Cart', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     //cartId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     productId: {type: DataTypes.INTEGER, unique: true},
//     count: {type: DataTypes.INTEGER, defaultValue: 1},
// });

export const Order = sequelize.define('Order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(20), allowNull: false},
    email: {type: DataTypes.STRING(20), unique: true},
    phone: {type: DataTypes.INTEGER},
    address: {type: DataTypes.STRING(50), allowNull: false}
});

export const OrderProduct = sequelize.define('OrderProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    orderId: {type: DataTypes.INTEGER, primaryKey: true},
    productId: {type: DataTypes.INTEGER, primaryKey: true},
    count: {type: DataTypes.INTEGER}
});

Shops.hasMany(Product, {as: 'products'})
Product.belongsTo(Shops);

Order.hasMany(OrderProduct, {as: 'orders'})
OrderProduct.belongsTo(Order);

Product.hasMany(OrderProduct, {as: 'products'})



