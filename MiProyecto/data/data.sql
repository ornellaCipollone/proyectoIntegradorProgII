CREATE DATABASE IF NOT EXISTS catalogo_producto;

USE catalogo_producto;

CREATE TABLE usuario (
	id_usuario	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre 		VARCHAR(50) 	NOT NULL,
    apellido 	VARCHAR(50) 	NOT NULL,
    email 		VARCHAR(50) 	NOT NULL,
    pass 		VARCHAR(200) 	NOT NULL,
    fecha_nac 	DATE 			NULL,
    dni 		INT 			UNIQUE NOT NULL,
    foto 		VARCHAR(200) 	NULL,
    created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    update_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_at 	TIMESTAMP 		NULL
);