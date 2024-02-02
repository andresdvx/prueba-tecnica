-- Active: 1706799582978@@viaduct.proxy.rlwy.net@29212@railway
create database railway;

use railway;

create table Clientes (
    identificacion VARCHAR(10) PRIMARY KEY,
    tipo_identificacion VARCHAR(10) NOT NULL,
    primer_nombre VARCHAR(255) NOT NULL,
    segundo_nombre VARCHAR(255),
    primer_apellido VARCHAR(255) NOT NULL,
    segundo_apellido VARCHAR(255),
    direccion VARCHAR(255),
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    ocupacion VARCHAR(255),
    fecha_nacimiento DATE NOT NULL,
    foto text
);

