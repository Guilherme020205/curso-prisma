import Joi, { number } from "joi";
import { CreateContactData } from "../protocols";

export const contactSchema = Joi.object<CreateContactData>({
    name: Joi.string().required(),
    phones: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            number: Joi.string().required(),
        })
    ).required(),
    address: Joi.object({
        street: Joi.string().required(),
        number: Joi.number().required(),
        zipCode: Joi.string().required(),
    }).required()
})