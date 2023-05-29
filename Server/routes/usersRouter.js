import {Router} from 'express';
import UsersController from '../controllers/usersController.js';

const routerUsers = new Router();

routerUsers.post('/', UsersController.post)

export default routerUsers;