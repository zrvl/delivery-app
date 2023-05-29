import { Router } from "express";
import shopsRouter from "./shopsRouter.js";
import productsRouter from "../routes/productsRouter.js";
import usersRouter from "../routes/usersRouter.js";
import routerOrders from "./ordersRouter.js";

const router = new Router();

router.use('/shops', shopsRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', routerOrders)

export default router;