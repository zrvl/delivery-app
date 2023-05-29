import {Order, OrderProduct} from '../models/models.js'


class OrdersController {
    static async post(req, resp) {
        const {name, email, phone, address, products_ids} = req.body
        const order = await Order.create({name, email, phone, address});
        for (const {idx,count} of products_ids) {
            await OrderProduct.create({orderId:order.id, productId:idx,count})
        }
        resp.json(order);
    }

}

export default OrdersController