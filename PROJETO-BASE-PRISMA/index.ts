import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // const buscaUsers = await prisma.user.findMany({
    //      where:{
    //         age: { 
    //             gte: 1,
    //             lt: 11
    //         }
    //      },
    //      select: {
    //         email: true,
    //         name: true
    //      }
    // })  

    // console.log(buscaUsers)

    // const criarUser = await prisma.user.create({
    //     data: {
    //         name: "diego",
    //         email: 'diego@example.com'
    //     }
    // })

    // console.log(criarUser)

    // const criarUsers = await prisma.user.createManyAndReturn({
    //     data: [
    //         {
    //             name: "diego7",
    //             email: 'diego7@example.com'
    //         },
    //         {
    //             name: "diego8",
    //             email: 'diego8@example.com'
    //         },
    //         {
    //             name: "diego9",
    //             email: 'diego9@example.com'
    //         }
    //     ],
    //     select: {
    //         name: true,
    //         email: true
    //     }
    // })

    // console.log(criarUsers)

    // const editarUser = await prisma.user.update({ // temos o updateMany que não obriga o uso do where
    //     data: {
    //         age: 19,
    //         balance: 10000
    //     },
    //     where: {
    //         id: 17 
    //     }
    // })

    // console.log(editarUser)

    // const editarOuCriarUser = await prisma.user.upsert({ // cria um registro se ele nao existir 
    //     create: {
    //         email: "teste@gmail.com",
    //         name: "nome teste"
    //     }, 
    //     update: {
    //         isActive: true
    //     },
    //     where: {
    //         email: "teste@gmail.com"
    //     }
    // })

    // console.log(editarOuCriarUser)

    const deletaUser = await prisma.user.delete({ // Se for deletar por name o sistema não permite usando apenas o delete, temos que usar o deleteMany para deletar, lembrando ele deleta todos os valores com o mesmo name
        where: {
            id: 18,
            /*
            podia fazer um filtro "deletar quem tem menos de 18 anos"

            age: {
                lte: 19
            }
            */
        }
    })

    console.log(deletaUser)

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