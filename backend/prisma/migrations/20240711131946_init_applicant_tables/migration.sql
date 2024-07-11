-- CreateEnum
CREATE TYPE "Status" AS ENUM ('new', 'open', 'review', 'interview', 'screening', 'negotiation', 'hired', 'rejected', 'declined');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('resume', 'certification', 'other');

-- CreateEnum
CREATE TYPE "FileExtension" AS ENUM ('doc', 'docx', 'pdf');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicant" (
    "id" BIGSERIAL NOT NULL,
    "createdBy" BIGINT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "socialSecurityNumber" TEXT,
    "dateOfBirth" TEXT,
    "email" TEXT NOT NULL,
    "phoneCode" VARCHAR(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT,
    "exteriorNumber" TEXT,
    "interiorNumber" TEXT,
    "education" TEXT NOT NULL,
    "professionalExperience" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicantFile" (
    "id" BIGSERIAL NOT NULL,
    "applicantId" BIGINT NOT NULL,
    "createdBy" BIGINT,
    "type" "FileType" NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "extension" "FileExtension" NOT NULL,
    "mimetype" VARCHAR(50) NOT NULL,
    "path" VARCHAR(150) NOT NULL,
    "hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ApplicantFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantFile" ADD CONSTRAINT "ApplicantFile_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantFile" ADD CONSTRAINT "ApplicantFile_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
