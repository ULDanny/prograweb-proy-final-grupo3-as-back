import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';
import Cliente from './cliente.js';

const Orden = sequelize.define('orden', {
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
    fechaOrden: {
        type: DataTypes.DATE,
        allowNull: false
    },
    envios: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distrito: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoPago: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoEnvio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    impuestos: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

Orden.belongsTo(Cliente, { foreignKey: 'idCliente', targetId: 'id' });
Cliente.hasMany(Orden, { foreignKey: 'idCliente' });

export default Orden;
