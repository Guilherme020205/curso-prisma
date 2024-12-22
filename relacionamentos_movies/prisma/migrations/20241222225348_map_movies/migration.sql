/*
  Warnings:

  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_detailsId_fkey";

-- DropTable
DROP TABLE "Movie";

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "detailsId" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_detailsId_key" ON "movies"("detailsId");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_detailsId_fkey" FOREIGN KEY ("detailsId") REFERENCES "MovieDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
