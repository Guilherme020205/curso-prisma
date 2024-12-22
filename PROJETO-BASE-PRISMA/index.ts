import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.users.findMany()
    console.log(users)
}

main()
    .then(() => {
        console.log("pi")
    }
    )
    .catch(e => {
        console.log(e)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })