import express from "express";
import { addUser, getUser, getUserEdit, editUser, deleteUser } from "../controller/userController.js";

const router = express.Router();

router.post('/adduser', addUser)
router.get('/alluser', getUser)
router.get('/:id', getUserEdit)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router;