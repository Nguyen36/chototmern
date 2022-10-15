const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
   {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})

mongoose.connection.once('open',()=>{
  console.log("Connected")
}).on('error',(error)=>{
  console.log("Error",error)
})