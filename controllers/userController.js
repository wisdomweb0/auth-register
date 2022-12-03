
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { makeHash } from '../utility/hash.js';
import { validate } from '../utility/validate.js';

//Profile page
export const profilePage = ( req, res ) => {

    res.render('profile')
}
//Login page
export const loginPage = ( req, res ) => {

    res.render('login')
}
//Register page
export const registerPage = ( req, res ) => {

    res.render('register')
}

//Register User
export const registerUser = async ( req, res ) => {
    
    try {

        const { name, email, password} = req.body;

        if (!name || !email || !password) {

            validate('All fields are required', '/register', req, res);    
            
        } else {


            await User.create({ name, email, password : makeHash(password) });

            validate('User register successfull', '/register', req, res);    

        }
        
    } catch (error) {

        validate( error.message, '/register', req, res );    
        
    }

}