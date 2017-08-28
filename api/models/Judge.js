/**
 * Judge.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    user:{
      model:'user',
      required:true
    },
    criteria:{
      model:'criteria',
      required:true
    },
    subCriteria:{
      model:'subCriteria',
      requied:true
    }
  }
};

