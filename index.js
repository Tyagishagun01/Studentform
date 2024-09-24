const express = require('express');
const path = require('path'); //  path bhi ek module ha jo inbuilt milta h 
const student = require('./routes/student')
const app = express();
const connection = require('./connection');

connection();
app.use(student);

app.set('view engine' ,'ejs'); //app.set "app" represent krta h express ko and ejs is a view engine  tbhi res.render dikhe jo views folder ma chle jana
app.set('views',path.resolve('./views'));
app.listen(3000, (err) =>{
    if(err){
        console.log(err)
    }else {
console.log("server is running on 3000");

    }
})