import { Request, Response } from "express";
import { findAll, insertNewContact } from "../repositories/contacts-repository";
import { CreateContactData } from "../protocols";

export async function getContacts(req: Request, res: Response) {
    try {
        const contacts = await findAll();
        res.send(contacts)
    } catch (err) {
        console.log(500)
        res.status(500).send("Something went wrong.")
    }
}

export async function createContact(req: Request, res: Response) {
    try {
        const contactData = req.body as CreateContactData;
        const newContact = await insertNewContact(contactData);
        res.status(201).send(newContact)
    } catch (err) {
        console.log(err)
        res.status(500).send("Something went wrong.")
    }
}