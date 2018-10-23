 
 const express = require('express');
 const http = require('http');
 const bodyParser  = require('body-parser');
 const morgan = require('morgan');
 const cors = require('cors')
const app=express();
const router = require('./router')
const mongoose = require('mongoose');

app.options('/feedback', cors())
// DB setup
mongoose.connect('mongodb://krasutski:123_Destination@ds139193.mlab.com:39193/ristorante_database',{ useNewUrlParser: true });

 // App setup
app.use(morgan('combined'))
//app.use(bodyParser.json({type:'*/'}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static('public'))
router(app)



 //server Setup

 const port= process.env.PORT || 3100;
 const server = http.createServer(app);
 server.listen(port);
 console.log('Server listen :' + port)

 module.exports = app