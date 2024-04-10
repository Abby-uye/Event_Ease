const mongoose = require(`mongoose`)
const schema = mongoose.Schema

const eventSchema = schema({
    name :{
        type : String,
        require : true,
        maxLength:100
    },
    date:{
        type : Date

    },
    attendeesCount:{
        type : Number,
        max : 1000
    },
    description: {
        type:String,
        maxLength: 500
    },
    category:{
        type:String,
        enum: ['CONCERT','CONFERENCE','GAME']
    }

})
const  Event = mongoose.model("event",eventSchema)
module.exports = Event