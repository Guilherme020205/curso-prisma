import prisma from "../database";
import { CreateContactData } from "../protocols";

export async function findAll() {
    return prisma.contact.findMany({
        include: {
            phones: true,
            address: true
        }
    })
}

export async function insertNewContact({ name, phones, address }: CreateContactData) {
    return prisma.contact.create({
        data: {
            name: name,
            phones: {
                createMany: {
                    data: phones
                }
            },
            address: {
                create: address
            }
        }
    })
}