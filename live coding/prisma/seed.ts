import prisma from "../src/database";

async function main() {
    await prisma.contact.upsert({
        where: {
            name: "Policia Militar",
        },
        create: {
            name: "Policia Militar",
            phones: {
                create: [
                    {title: "Principal", number: "190"}
                ]
            }, 
            address: {
                create: {
                    street: "Brasil",
                    number: 1058,
                    zipCode: "12124512"
                }
            }
        }, 
        update: {}
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.log(err)
        await prisma.$disconnect()
        process.exit(1)
    })