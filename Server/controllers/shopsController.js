import {Shops, Product} from '../models/models.js'


class ShopsController {
    static async get (req, resp) {
        try {
            const shops = await Shops.findAll();
            return resp.json(shops)
        } catch (err) {
            return resp.status(500).json({error: err.message})
        }
    }
    static async getById (req, resp) {
        try {
            const id = req.params.id;
            const products = await Shops.findOne(
                {
                    where: {id},
                    include: [{model: Product, as:"products"}]
                }
            );
            return resp.json(products)
        } catch (err) {
            return resp.status(500).json({error: err.message})
        }
    }
    static async post (req, resp) {
        try {
            const {name} = req.body;
            const shop = await Shops.create({name});
            return resp.json(shop)
        } catch (err) {
            return resp.status(500).json({error: err.message})
        }
    }
}

export default ShopsController;