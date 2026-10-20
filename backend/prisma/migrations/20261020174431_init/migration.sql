-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('estudiante', 'tutor', 'administrador');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "googleID" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" "Rol",
    "telefono" TEXT,
    "direccion" TEXT,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,
    "foto" TEXT,
    "genero" TEXT,
    "documentoIdentidad" TEXT,
    "perfilCompleto" BOOLEAN NOT NULL DEFAULT false,
    "suspendido" BOOLEAN NOT NULL DEFAULT false,
    "razonSuspension" TEXT,
    "suspendidoFecha" TIMESTAMP(3),
    "creadoFecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoriaPadreId" INTEGER,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_googleID_key" ON "usuarios"("googleID");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nombre_key" ON "categorias"("nombre");

-- AddForeignKey
ALTER TABLE "categorias" ADD CONSTRAINT "categorias_categoriaPadreId_fkey" FOREIGN KEY ("categoriaPadreId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
