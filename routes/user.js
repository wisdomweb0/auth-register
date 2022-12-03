
import express from 'express';
import { loginPage, profilePage, registerPage, registerUser } from '../controllers/userController.js';

 const route = express.Router();

route.get('/', profilePage);
route.get('/login', loginPage);
route.get('/register', registerPage);
route.post('/register', registerUser);

 export default route;