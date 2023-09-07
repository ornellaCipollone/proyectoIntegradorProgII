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
    pie 		varchar(50) NULL,
    id_usuario 	INT 	UNSIGNED NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    update_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_at 	TIMESTAMP 		NULL
);
CREATE TABLE comentarios (
	id_comentario 	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_post 	INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_post) REFERENCES posteo(id_posteo),
    id_usuario 	INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    texto 		VARCHAR(200) 	NOT NULL,
	created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    update_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_at 	TIMESTAMP 		NULL
    
);
INSERT INTO usuario 
VALUES (DEFAULT,"ramiro","lohrmann","lohrmannramiro@gmail.com","Ramiro",'2003-05-28',44997949,"foto",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Ornella","Cipollone","ornella@gmail.com","Ornella",'2003-08-01',44997950,"foto",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Lara","Manfredini","lara@gmail.com","Lara",'2003-09-04',44997951,"foto",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"juan","Rodriguez","Juan@gmail.com","Juan",'2003-08-05',44997952,"foto",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Jorge","pinto","Jorge@gmail.com","Jorge",'2003-03-13',44997953,"foto",DEFAULT,DEFAULT,DEFAULT);
SELECT*FROM usuario;
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",1,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",1,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",2,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",2,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",2,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",3,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",3,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",3,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",4,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"nombre","pie de foto",4,DEFAULT,DEFAULT,DEFAULT);
SELECT*FROM posteo;

INSERT INTO comentarios
VALUES (DEFAULT,3,3,"hola",DEFAULT,DEFAULT,DEFAULT);