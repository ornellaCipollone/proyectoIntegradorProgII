CREATE SCHEMA tpProgra;

USE tpProgra;



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

CREATE TABLE posteo (
	id_posteo	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nom         VARCHAR(50) NOT NULL,
    id_usuario 	INT 	UNSIGNED NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    update_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_at 	TIMESTAMP 		NULL
);
CREATE TABLE comentarios (
	id_comentario 	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario 	INT UNSIGNED NOT NULL,
    id_post 	INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_post) REFERENCES posteo(id_posteo),
    texto 		VARCHAR(200) 	NOT NULL,
	created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    update_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_at 	TIMESTAMP 		NULL
    
);
INSERT INTO usuario 
VALUES (DEFAULT,"ramiro","lohrmann","lohrmannramiro@gmail.com","Ramiro",'28/05/2003',44997949,"foto",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Ornella","Cipollone","ornella@gmail.com","Ornella",'01-08-2003',44997950,"foto",DEFAULT,DEFAULT,DEFAULT);

SELECT * FROM usuario;