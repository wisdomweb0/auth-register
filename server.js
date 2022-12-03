import express from 'express';
import dotenv from 'dotenv';
import expresslayout from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import collors from 'colors';
import session from 'express-session';
import { mongoDBConnection } from './config/db.js';
import { localMiddleware } from './middlewares/localsMiddleware.js';
import userRoute from './routes/user.js'

const app = express();
//init dotenv
dotenv.config();
const PORT = process.env.PORT || 4000;


//ejs init
app.set('view engine', 'ejs');
//express layout
app.use(expresslayout);
app.set('layout', 'layouts/app');

//Data manage
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));

//set session middleware
app.use(session({
    secret : "I have learn MERN stack",
    saveUninitialized : true,
    resave : false
}))
//Local middleware
app.use( localMiddleware )

//Cookie parser for manage cookie
app.use(cookieParser());

//Folter static
app.use(express.static('public'));


//Route
app.use('/', userRoute)

// server listen
app.listen( PORT, ()=> {
    mongoDBConnection()
    console.log(`Server is running ${PORT}`.bgGreen.black);
})
