const {response, request} = require('express')
const {create} = require('../services/event-service')

const createEvent = async(request, response)=>{
        return await create(request.body)
            .then((res)=>{response.json(res)

        })
            .catch((error)=>{
                    response.json(error)
            })
}