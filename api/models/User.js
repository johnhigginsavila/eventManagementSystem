/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
module.exports = {
  schema:true,
  attributes: {
    idNumber:{
      type:'string',
      required:true,
      unique:true
    },
    firstname:{
      type:'string',
      required:true
    },
    lastname:{
      type:'string',
      required:true
    },
    email:{
      type:'email',
      required:true,
      unique:true
    },
    encryptedPassword:{
      type:'string'
    },
    admin:{
      type:'boolean',
      defaultsTo:false
    },
    vote:{
      collection:'vote',
      via:'user'
    },
    userRepresentative:{
      collection:'userRepresentative',
      via:'user'
    },
    judge:{
      collection:'judge',
      via:'user'
    }
  },
  toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
  },
	
  beforeCreate: (values, next) => {
    encryptPassword(values, next);
  },

  beforeUpdate: (values, next) => {
    encryptPassword(values, next)
  }
};
function encryptPassword(values, next){
  if(!values.password || values.password != values.confirmation){
      return next({err:["Password doesn't match password confirmation."]});
    }else{
      bcrypt.hash(values.password, 10)
      .then(function(encryptedPassword){
        values.encryptedPassword = encryptedPassword;
        return values;
      })
      .then(function(values){
        User.find().then(function(result){
          if(result.length == 0 || values.admin == true){
            values.admin = true;
          }
          next();
        })
      })
      .catch(function(err){
        return next(err);
      })
    }
}
