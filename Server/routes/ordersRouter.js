import { Router } from "express"
import OrdersController from "../controllers/ordersController.js";

const routerOrders = new Router();

routerOrders.post('/', OrdersController.post);

export default routerOrders;