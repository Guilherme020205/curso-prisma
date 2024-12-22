import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const movie = await prisma.movie.create({
    //     data: {
    //         title: "Movie",
    //         releaseDate: new Date(),
    //         details: {
    //             create: {
    //                 description: "a movie",
    //                 duration: 100
    //             }
    //         }
    //     }
    // })

    // console.log(movie)

    // ou criar o movieDetail e o movie separados

    // const movieDetail = await prisma.movieDetail.create({
    //     data:{
    //         description: "Teste 2",
    //         duration: 200
    //     }
    // })

    // const movie = await prisma.movie.create({
    //     data:{
    //         title: "Titulo 2",
    //         releaseDate: new Date(),
    //         details: {
    //             connect: {
    //                 id: movieDetail.id
    //             }
    //         }
    //     }
    // })

    // console.log(movieDetail)
    // console.log(movie)

    const movies = await prisma.movie.findMany({
        include:{
            details: true
        }
    });
    console.log(movies)
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