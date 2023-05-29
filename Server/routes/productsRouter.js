import {Router} from 'express';
import ProductsController from '../controllers/productsController.js';

const routerProducts = new Router();

routerProducts.post('/', ProductsController.post)
routerProducts.get('/filtered', ProductsController.filtered)
routerProducts.get('/:id', ProductsController.get)

export default routerProducts;