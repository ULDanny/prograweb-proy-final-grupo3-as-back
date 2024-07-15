

import Usuario from '../models/usuario.js'
import Cliente from '../models/cliente.js'

import RepositoryBase from '../repositories/base.js'

const findAllComplete = async () => {
    
    const clientes = await Cliente.findAll({
        include: [Usuario]
    })

    return clientes
}

 const service = {  findAllComplete }

 export default service