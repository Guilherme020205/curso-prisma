import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const movies = await prisma.movie.create({
        data: {
            title: "movie",
            releaseDate: new Date(),
            details: {
                create: {
                    description: "a movie",
                    duration: 1000
                }
            },
            director: {
                create: {
                    name: "Director"
                }
            },
            CategoryOnMovies: {
                create: {
                    category: {
                        create: {
                            name: "Aventura"
                        }
                    }
                }
            }

        }
    })

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