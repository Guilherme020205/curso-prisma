/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `constacts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "constacts_name_key" ON "constacts"("name");
