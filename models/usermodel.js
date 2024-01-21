const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: "true"
    },
    email: {
        type: "string",
        required: 'true'
    },
    mobile: {
        type: 'string',
        required: 'true'
    },
    password: {
        type: 'string',
        required: 'true'
    }
})
const USERS=mongoose.model('user',userSchema)
module.exports=USERS