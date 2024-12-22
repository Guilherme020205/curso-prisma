-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "detailsId" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieDetail" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MovieDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_detailsId_key" ON "Movie"("detailsId");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_detailsId_fkey" FOREIGN KEY ("detailsId") REFERENCES "MovieDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
