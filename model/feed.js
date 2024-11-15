const mongoose = require("mongoose");
const moment = require("moment");

const feed = new mongoose.Schema({
    name: {
        type : String,
        maxLength : ['15', 'The Name field must be no longer than 15 characters'],
        required: [true, 'The name field is required']
    },
    message: {
        type: String,
        maxLength: ['40', 'The Message field must be no longer than 40 character'],
        required: [true, 'The message field is required']
    },
    createdAt : {
        type : Date,
        required : false,
        default :  Date.now(),
        get: (created_at) => moment(created_at).format("MMM Do YYYY")
        
    },
    
});



module.exports = mongoose.model("Feed", feed);