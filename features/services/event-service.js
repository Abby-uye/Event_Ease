const Event = require("../models/event")
const NotfoundException = require("../exceptions/not-found-exception")

const  createEvent = async(creatEventRequest) =>{
    const { name, date, attendeesCount, description, category } = creatEventRequest;
    const newEvent = { name, date, attendeesCount, description, category };


const createdEvent = await Event.create(newEvent)
    const response = {
name : createdEvent.name,
        date:createdEvent.date,
        category:createdEvent.category,
        description:createdEvent.description


    }
return {
    data: response

}
}