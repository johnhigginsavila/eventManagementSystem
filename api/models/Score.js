/**
 * Score.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    judge:{
      model:'judge',
      required:true
    },
    subCriteria:{
      model:'subCriteria',
      required:true
    },
    representative:{
      model:'representative',
      required:true
    },
    rating:{
      type:'float',
      required:true,
      max:1
    }
  }
};

