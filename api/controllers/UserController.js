/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find:(req, res, next)=>{
        User.find()
        .then(deletePassword)
        .then((users)=>{
            res.send(200, users);
        })
        .catch((err) => {
            res.send(500, err);
        })

        function deletePassword(users){
            const promise = new Promise((resolve, reject) => {
                let newUsers = [];
                users.forEach((item, index, array) => {
                    delete item.encryptedPassword;
                    delete item.createdAt;
                    delete item.updatedAt;
                    newUsers.push(item);
                })
                setTimeout(() => {
                    resolve(newUsers);
                }, 200)
            })
            return promise;
        }
    },
    create:(req, res, next) => {
        User.create(req.body)
        .then((user) => {
            if(user){
                delete user.encryptedPassword;
                delete user.createdAt;
                delete user.updatedAt;
                console.log(user);
                res.send(200, user)
            } else {
                res.send(400, {createUserError:'Invalid Input'})
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(500, err);
        })
    }
};

