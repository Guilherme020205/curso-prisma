import { Router }  from "express";
import { createContact, getContacts } from "../Controllers/contacts-controller";
import { validateSchemaMiddleware } from "../middlewares/schema-validation";
import { contactSchema } from "../schemas/contacts-schemas";

const constactsRouter = Router();

constactsRouter.get('/contacts', getContacts)
constactsRouter.post('/contacts', validateSchemaMiddleware(contactSchema), createContact)

export default constactsRouter;