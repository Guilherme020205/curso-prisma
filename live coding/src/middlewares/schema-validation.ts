import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
 
export function validateSchemaMiddleware(schema: ObjectSchema){
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, {abortEarly: false})
        if(validation.error){
            return res.status(422).send({
                error: validation.error.message
            })
        }
        
        next(); 
    }
}