import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

import Usuario from './usuario.js'

const Cliente = sequelize.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaRegistro: {
        type: DataTypes.DATE,
        allowNull: false
    }
})


Cliente.belongsTo(Usuario, 
    { foreignKey: 'idUsuario', targetId: 'id' })



export default Cliente;