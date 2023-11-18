import { Express } from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controller/users.js";

const router = Express.Router();

router.get('/', getUser);

router.post('/', createUser);

router.get('/', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;