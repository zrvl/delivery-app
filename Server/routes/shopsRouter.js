import {Router} from 'express';
import ShopsController from '../controllers/shopsController.js';

const routerShops = new Router();

routerShops.get('/', ShopsController.get);
routerShops.get('/:id/products', ShopsController.getById);
routerShops.post('/', ShopsController.post)

export default routerShops;