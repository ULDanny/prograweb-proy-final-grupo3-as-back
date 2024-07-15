import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';
import Orden from './orden.js';
import Producto from './producto.js';

const DetalleOrden = sequelize.define('detalleorden', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idOrden: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

DetalleOrden.belongsTo(Orden, { foreignKey: 'idOrden', targetId: 'id' });
DetalleOrden.belongsTo(Producto, { foreignKey: 'idProducto', targetId: 'id' });

Orden.hasMany(DetalleOrden, { foreignKey: 'idOrden'});
Producto.hasMany(DetalleOrden, { foreignKey: 'idProducto'});

export default DetalleOrden;
