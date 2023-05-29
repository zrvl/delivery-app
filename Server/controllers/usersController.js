import {User} from '../models/models.js'

class UsersController {
    static async post (req, resp) {
        try {
            const {name, phone, address} = req.body;
            const user = await User.create({name, phone, address});
            return resp.json(user)
        } catch (err) {
            return resp.status(500).json({error: err.message})
        }
    }
}

export default UsersController;