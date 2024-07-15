import Serie from '../models/serie.js'
import Producto from '../models/producto.js'

import RepositoryBase from '../repositories/base.js'


const findAllComplete = async () => {
    
    const series = await Serie.findAll({
        include: [{ model: Producto, required: false}]
    })

    return series
}

const findOneComplete = async (id) => {
    
    const serie = await Serie.findOne({
        where: { id },
        include: [{ model: Producto, required: false}]
    })

   
    return serie
}


 const service = {  findAllComplete,findOneComplete }

 export default service