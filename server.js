const express = require('express');
const homeController = require('./homeController');
const app = express();
const port = 8000;

app.use('/api/home', homeController.get);

app.listen(port, function(err){
    if(err){
      console.log(`error in listening server at port : ${port}`);
    }
  
    console.log(`listening at port ${port}`);
  });