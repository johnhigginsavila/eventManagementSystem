/**
 * SubEvent.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  attributes: {
    event:{
      model:'event',
      required:true
    },
    subEventName:{
      type:'string',
      required:true
    },
    location:{
      type:'string',
      required:true
    },
    startDate:{
      type:'datetime',
      required:true
    },
    endDate:{
      type:'datetime',
      required: true
    },
    criteria:{
      collection:'criteria',
      via:'subEvent'
    }
  }
};

