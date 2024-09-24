const mongoose = require('mongoose'); //mongoose library contain all the function that we require 
async function connection(){
    try{
        let connect = await mongoose.connect('mongodb://localhost:27017/Students-new');  //await means it return promise 
        console.log("connection created...");
    }catch(err){
        console.log(err);

    }
}

module.exports = connection;