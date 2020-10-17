const mongoose=require('mongoose');

var UserSchema = new mongoose.Schema({
    Name:{
         type: String
    }
    ,
      Email:{
        type: String
   }      
   ,
     Pwd:{
      type: String
     }
     ,
     Confirpwd:{
      type: String
     }
     ,
     Number:{
      type: Number
     }
});
mongoose.model('User',UserSchema);