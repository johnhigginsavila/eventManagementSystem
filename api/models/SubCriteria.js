/**
 * SubCriteria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    criteria:{
      model:'criteria',
      required:true
    },
    subCriteriaName:{
      type:'string',
      required:true
    },
    weight:{
      type:'float',
      required:true,
      max:1
    },
    type:{
      type:'string',
      enum:['vote','judge'],
      required:true,
      defaultsTo:'judge'
    },
    subCriteriaRepresentative:{
      collection:'subCriteriaRepresentative',
      via:'subCriteria'
    },
    score:{
      collection:'score',
      via:'subCriteria'
    },
    judge:{
      collection:'judge',
      via:'subCriteria'
    }
  }
};

