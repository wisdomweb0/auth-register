
import express from 'express';
import { loginPage, loginUser, profilePage, registerPage, registerUser } from '../controllers/userController.js';

 const route = express.Router();

route.get('/', profilePage);
route.get('/login', loginPage);
route.get('/register', registerPage);
route.post('/register', registerUser);
route.post('/login', loginUser);

 export default route;