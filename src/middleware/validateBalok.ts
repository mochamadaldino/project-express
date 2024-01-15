import { error } from "console"
import { NextFunction, Request, Response } from "express"
import Joi from "joi"
import { FunctionBody } from "typescript"

// create validation schemma
let schema = Joi.object({
    p: Joi.number().required().min(1),
    l: Joi.number().required().min(1),
    t: Joi.number().required().min(1)
    // required adalahketentuan yang dbutuhkan
})

//  create a validation fuction
let validateBalok = (request: Request, response:Response, next:NextFunction) => {
let{error} = schema.validate(request.body)
if(error) {
    // 400 = bad request
    return response.status(400).json({
        message: error.details
    })
}
next()
}

export { validateBalok }