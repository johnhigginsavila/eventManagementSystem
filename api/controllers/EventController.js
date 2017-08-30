/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find:(req, res, next) => {
        Event.find()
        .then(populateSubEvents)
        .then((events) => {
            res.send(200, events);
        }).catch((err) => {
            res.send(500, err);
        })

        function populateSubEvents(events) {
            const promise = new Promise((resolve, reject) => {
                let newEvent = [];
                events.forEach((item, index, array) => {
                    SubEvent.find({id:item.subEvent})
                    .then(populateCriteria)
                    .then((subEvent) => {
                        item.subEvent = subEvent;
                        newEvent.push(item)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                })
                resolve(newEvent);
            })
            return promise;
        }

        function populateCriteria (subEvents) {
            const promise = new Promise((resolve, reject) => {
                let newSubEvent = [];
                subEvents.forEach((item, index, array) => {
                    Criteria.find({id:item.criteria})
                    .then((criteria) => {
                        item.criteria = criteria;
                        newSubEvent.push(item);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                })
                resolve(newSubEvent);
            })
            return promise;
        }

        function populateSubCriteria (criteria) {
            const promise = new Promise((resolve, reject) => {
                let newSubCriteria = [];
                criteria.forEach((item, index, array) => {
                    SubCriteria.find({id:item.subCriteria})
                    .then((subCriteria) => {
                        item.subCriteria = subCriteria;
                        newSubCriteria.push(item);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                })
                resolve(newSubCriteria);
            })
            return promise;
        }

    },
    create:(req, res, next) => {
        Event.create(req.body)
        .then((event) => {
            if(event){
                res.send(200, event);
            }else{
                res.send(400, {eventError:'There is an error in adding an event'});
            }
        }).catch((err) => {
            res.send(500, err);
        })
    },
    delete:(req,res,next) => {
        Event.delete({id:req.param.id})
        .then((deletedEvent) => {
            req.send(200, deletedEvent);
        }).catch((err) => {
            req.send(500, err);
        })
    }
};

