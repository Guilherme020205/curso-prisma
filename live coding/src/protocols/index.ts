import { Contact, Phone, Address } from "@prisma/client"

export type CreateContactData = Omit<Contact, "id" | "adrressId"> & {
    phones: Omit<Phone, "id" | "contactId">[],
    address: Omit<Address, "id">
}