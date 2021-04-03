const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    company: {
        type:String,
        require:true,
    },
    logo: String,
    new: {
        type:Boolean,
        default: true
    },
    featured:{
        type:Boolean,
        default: false
    },
    position: String,
    role: String,
    level: String,
    postedAt:{
        type:Date,
        default: Date.now
    },
    contract: String,
    location: String,
    languages: [
        {
            type:String
        }
    ],
    tools: [
        {
            type:String
        }
    ]
})


 module.exports = mongoose.model('Job', jobSchema)