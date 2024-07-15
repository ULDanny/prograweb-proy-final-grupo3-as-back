
import Carrito from '../models/carritocompras.js'
import Producto from '../models/producto.js'

const findAllComplete = async () => {
    
    const carritos = await Carrito.findAll({
        include: [Producto]
    })

    return carritos
}

 const service = {  findAllComplete }

 export default service