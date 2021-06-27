import { Router } from "express";
import UserController from "../../Controllers/UserController";

const router = Router();


router.post('/create',UserController.store);
router.get('/',UserController.list);
router.get('/show/:email',UserController.show);
router.get('/get/user/:id',UserController.get);
router.put('/update/user/:id',UserController.update);
router.delete('/delete/:id',UserController.delete);




export default router;