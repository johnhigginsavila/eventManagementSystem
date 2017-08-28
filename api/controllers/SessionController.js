/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');
module.exports = {
	create:(req, res, next) => {
        findUser()
        .then(validatePassword)
        .then(logUserIn)
        .then((result)=> {
            if(!result.error){
                res.send(200, result) 
            }
            else{
                res.status(400).send({createSessionError:result.message})
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(500, err);
        })
        function findUser() {
            const promise = new Promise((resolve, reject) => {
                User.findOne({or:[{idNumber:req.body.loginName},{email:req.body.loginName}]})
                .then((user) => {
                    if(user){
                        resolve(user);
                    }else{
                        const error = {
                            message:'Invalid id-number or email',
                            error:true
                        }
                        resolve(error);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
            })
            return promise;
        }
        function validatePassword(data){
            const promise = new Promise((resolve, reject) => {
                if(data.error){
                    resolve(data);
                }else{
                    bcrypt.compare(req.body.password, data.encryptedPassword)
                    .then((res) => {
                        if(!res){
                            const error = {
                                message:'Invalid password',
                                error:true
                            }
                            resolve(error);
                        }else{
                            resolve(data);
                        }
                    })
                    .catch((err) => {
                        reject({err:'comparePasswordError'});
                    })
                }
            })
            return promise;
        }
        function logUserIn(user){
            const promise = new Promise(function(resolve, reject){
                if(!user.error){
                    //req.session.authenticated = true;
                    delete user.encryptedPassword;
                    delete user.createdAt;
                    delete user.updatedAt;
                    //req.session.User = data.user;
                    //req.session.token = jwToken.issue({id: data.user.id});
                    /*var token = jwt.sign(data.user, process.env.SECRET,{
                    expiresIn: 60*60*24
                    })*/
                    //req.session.token = token;
                    resolve(user);
                }else{
                    resolve(user);
                }  
            })
            return promise;
        }
    }

    
};

