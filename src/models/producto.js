import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

import Serie from './serie.js';

const Producto = sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    procesador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: true
    },
    grafica: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RAM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    vendido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    oferta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idSerie: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

Producto.belongsTo(Serie, { foreignKey: 'idSerie', targetId: 'id' })
Serie.hasMany(Producto, { foreignKey: 'idSerie'});



export default Producto;