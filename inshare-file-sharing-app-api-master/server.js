require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path')
const connectDB = require('./config/db');
// connectDB();
// const mongoose = require("mongoose")

// const KittenSchema = mongoose.Schema({
//   name:{
//     type:String
//   }
// })
// const Kit = mongoose.model('Kitten' , KittenSchema )

// const t = new Kit({name:"Ratnesh"})

// t.save((er , obj)=>{
//   if(er)
// {
//   console.log(er)
// }else{
//   console.log(obj)
// }

// })
const cors = require('cors');
// Cors 
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

// app.use(cors(corsOptions))
// app.use(express.static('public'));

// const connectDB = require('./config/db');
connectDB();

app.use(express.json());
app.set("port",PORT)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));
