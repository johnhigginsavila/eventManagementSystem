/**
 * Criteria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    subEvent:{
      model:'subEvent',
      required:true
    },
    criteriaName:{
      type:'string',
      required:true
    },
    weight:{
      type:'float',
      required:true,
      max:1
    },
    schedule:{
      type:'datetime',
      required:true
    },
    subCriteria:{
      collection:'subCriteria',
      via:'criteria'
    },
    judge:{
      collection:'judge',
      via:'criteria'
    }
  }
};

