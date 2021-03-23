CREATE DATABASE mantenedor_empleados;

USE mantenedor_empleados;

CREATE TABLE empleado(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    rut VARCHAR(20) NOT NULL UNIQUE,
    nombres VARCHAR(250) NOT NULL,
    apellido_pat VARCHAR(100) NOT NULL,
    apellido_mat VARCHAR(100) NOT NULL,
    imagen VARCHAR(255)
);