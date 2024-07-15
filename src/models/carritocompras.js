import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

import Producto from './producto.js'
import Cliente from './cliente.js'

const Carrito = sequelize.define('carrito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paraDespues: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

Carrito.belongsTo(Producto, {foreignKey: 'idProducto', targetId: 'id' })
Carrito.belongsTo(Cliente, {foreignKey: 'idCliente', targetId: 'id' })

Cliente.hasMany(Carrito, { foreignKey: 'idCliente'});
Producto.hasMany(Carrito, { foreignKey: 'idProducto'});


export default Carrito;

