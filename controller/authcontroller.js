const mongoose = require("mongoose")
const USER = require('../models/usermodel')
const dosignup = (req, res) => {
    console.log("signup data is received ");
    console.log(req.body);
    USER.find({ email: req.body.email }).then((respo) => {
        if (respo.length === 0) {
           
            USER({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password
            }).save()
                .then((resp) => {
                    res.json({ data: true });
                    console.log('ok');
                })
                .catch((error)=> console.log('error'))
        } else {
            console.log(respo);
            console.log('email is exist');
            res.json({ data: 1 })
        }
    })
}

const dologin = (req, res) => {
    console.log(req.body);
}
module.exports = { dosignup, dologin }