import {Product} from '../models/models.js'


class ProductsController {
    static async post (req, resp) {
        try {
            const {shopId, title, price, image} = req.body;
            const product = await Product.create({title, price, image, ShopId: shopId});
            return resp.json(product)
        } catch (err) {
            return resp.status(500).json({error: err.message})
        }
    }

    static async get (req, resp) {
        try {
            const id = req.params.id;
            const product = await Product.findOne(
                {
                    where: {id},
                }
            );
            return resp.json(product)
        } catch(err) {
            return resp.status(500).json({error: err.message})
        }
    }

    static async filtered (req, resp) {
        const {ids} = req.query;
        const products = await Product.findAll({where: {id:ids.split(',')}})
        return resp.json({products})
    }
}

export default ProductsController;