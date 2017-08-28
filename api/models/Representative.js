/**
 * Representative.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    representativeName:{
      type:'string',
      required:true
    },
    type:{
      type:'string',
      enum:['individual','group'],
      required:true
    },
    description:{
      type:'string'
    },
    userRepresentative:{
      collection:'userRepresentative',
      via:'representative'
    },
    subCriteriaRepresentative:{
      collection:'subCriteriaRepresentative',
      via:'representative'
    },
    score:{
      collection:'score',
      via:'representative'
    }
  }
};

