CREATE DATABASE YearBookDB;
USE YearBookDB;

--TABLA USUARIO
CREATE TABLE usuario 
(
    usuario_Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    usuario_Nombre VARCHAR(50),
    usuario_password VARCHAR(50), 
    usuario_FechaCreacion DATETIME
);

-- TABLA ESTUDIANTE
CREATE TABLE estudiante 
(
    estudiante_Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    estudiante_Nombre1 VARCHAR(50),
    estudiante_Nombre2 VARCHAR(50), 
    estudiante_Apellido VARCHAR(50), 
    estudiante_correo VARCHAR(100)
);

-- TABLA MAESTRO
CREATE TABLE maestro 
(
    maestro_Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    maestro_Nombre1 VARCHAR(50),
    maestro_Nombre2 VARCHAR(50), 
    maestro_Apellido VARCHAR(50), 
    maestro_correoIns VARCHAR(100)
);

-- PROCEDIMIENTO ALMACENADO PARA AGREGAR USUARIO
CREATE DEFINER=`root`@`localhost` PROCEDURE `AgregarUsuario`(
IN _usuario_Id INT,
IN _usuario_Nombre VARCHAR(50),
IN _usuario_password VARCHAR(50), 
IN _usuario_FechaCreacion DATETIME
)
BEGIN
IF _usuario_Id = 0 THEN
INSERT INTO usuario(usuario_Id,usuario_Nombre,usuario_password,usuario_FechaCreacion)
VALUES (_usuario_Id,_usuario_Nombre,_usuario_password,_usuario_FechaCreacion);
ELSE
UPDATE usuario
SET
usuario_Nombre = _usuario_Nombre,
usuario_password = _usuario_password,
usuario_FechaCreacion = _usuario_FechaCreacion
WHERE usuario_Id = _usuario_Id;
END IF;
SELECT _usuario_Id AS 'usuario_Id';
END

-- PROCEDIMIENTO ALMACENADO PARA AGREGAR ESTUDIANTE
CREATE DEFINER=`root`@`localhost` PROCEDURE `AgregarEstudiante`(
IN _estudiante_Id INT,
IN _estudiante_Nombre1 VARCHAR(50),
IN _estudiante_Nombre2 VARCHAR(50),
IN _estudiante_Apellido VARCHAR(50),
IN _estudiante_correo VARCHAR(100)
)
BEGIN
IF _estudiante_Id = 0 THEN
INSERT INTO estudiante(estudiante_Id,estudiante_Nombre1,estudiante_Nombre2,estudiante_Apellido,estudiante_correo)
VALUES (_estudiante_Id,_estudiante_Nombre1,_estudiante_Nombre2,_estudiante_Apellido,_estudiante_correo);
ELSE
UPDATE estudiante
SET
estudiante_Nombre1 = _estudiante_Nombre1,
estudiante_Nombre2 = _estudiante_Nombre2, 
estudiante_Apellido = _estudiante_Apellido, 
estudiante_correo = _estudiante_correo
WHERE estudiante_Id = _estudiante_Id;
END IF;
SELECT _estudiante_Id AS 'estudiante_Id';
END

-- PROCEDIMIENTO ALMACENADO PARA AGREGAR MAESTRO
CREATE DEFINER=`root`@`localhost` PROCEDURE `AgregarMaestro`(
IN _maestro_Id INT,
IN _maestro_Nombre1 VARCHAR(50),
IN _maestro_Nombre2 VARCHAR(50),
IN _maestro_Apellido VARCHAR(50),
IN _maestro_correoIns VARCHAR(100)
)
BEGIN
IF _maestro_Id = 0 THEN
INSERT INTO maestro(maestro_Id,maestro_Nombre1,maestro_Nombre2,maestroe_Apellido,maestro_correoIns)
VALUES (_maestro_Id,_maestro_Nombre1,_maestro_Nombre2,_maestro_Apellido,_maestro_correo);
ELSE
UPDATE maestro
SET
maestro_Nombre1 = _maestro_Nombre1,
maestro_Nombre2 = _maestro_Nombre2, 
maestro_Apellido = _maestro_Apellido, 
maestro_correo = _maestro_correo
WHERE maestro_Id = _maestro_Id;
END IF;
SELECT _maestro_Id AS 'maestro_Id';
END