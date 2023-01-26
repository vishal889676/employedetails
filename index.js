const express = require('express');
const path=require('path')
const app=express();
const mongoose=require('./config/moongose');
const router=require('./router/route');
app.use(router);
//app.use(express.static(__dirname + '/router/public'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const bodyParser=require('body-parser');
app.use(express.json())



app.listen(3000,()=>{
console.log('listening on port 3000');
});