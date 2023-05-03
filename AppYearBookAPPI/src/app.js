const mysql = require("mysql");
const express = require("express");

var app = express();
//Configuring express server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Educa2023*",
  database: "YearBookDB",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

//Establecer la conexión con el servidor
//VARIABLE AMBIENTE PORTUARIO
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//U S U A R I O
//Creando GET Router para obtener todos los detalles de los usuarios de la base de datos MySQL
app.get("/usuario", (req, res) => {
    mysqlConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });
  
  //Enrutador para OBTENER detalles específicos del usuario de la base de datos MySQL
  app.get("/usuario/:id", (req, res) => {
    mysqlConnection.query(
      "SELECT * FROM usuario WHERE usuario_Id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  //Enrutador para INSERTAR/PUBLICAR los detalles de un usuario
  app.post("/usuario", (req, res) => {
    let usuario = req.body;
    if(usuario.usuario_Id === undefined){
        usuario.usuario_Id = 0;
    }
    var sql =
      "SET @usuario_Id = ?;SET @usuario_Nombre = ?;SET @usuario_password = ?;SET @usuario_FechaCreacion = ?; CALL AgregarUsuario(@usuario_Id,@usuario_Nombre,@usuario_password,@usuario_FechaCreacion);";
    mysqlConnection.query(
      sql,
      [
        usuario.usuario_Id,
        usuario.usuario_Nombre,
        usuario.usuario_password,
        usuario.usuario_FechaCreacion,
      ],
      (err, rows, fields) => {
        if (!err) res.send("Usuario se agrego correctamente");
        else console.log(err);
      }
    );
  });
  
  //Router para ACTUALIZAR el detalle de un usuario
  app.put("/usuario", (req, res) => {
    let usuario = req.body;
    var sql =
    "SET @usuario_Id = ?;SET @usuario_Nombre = ?;SET @usuario_password = ?;SET @usuario_FechaCreacion = ?; CALL AgregarUsuario(@usuario_Id,@usuario_Nombre,@usuario_password,@usuario_FechaCreacion);";
    mysqlConnection.query(
      sql,
      [
        usuario.usuario_Id,
        usuario.usuario_Nombre,
        usuario.usuario_password,
        usuario.usuario_FechaCreacion,
      ],
      (err, rows, fields) => {
        if (!err) res.send("Detalles del usuario actualizados con éxito.");
        else console.log(err);
      }
    );
  });
  
  //Router para BORRAR el detalle de un usuario
  app.delete("/usuario/:id", (req, res) => {
    mysqlConnection.query(
      "DELETE FROM usuario WHERE usuario_Id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send("Registro de usuario eliminado con éxito.");
        else console.log(err);
      }
    );
  });
  

// E S T U D I A N T E

//Creando GET Router para obtener todos los detalles de los estudiantes de la base de datos MySQL
app.get("/estudiante", (req, res) => {
  mysqlConnection.query("SELECT * FROM estudiante", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//Enrutador para OBTENER detalles específicos del estudiante de la base de datos MySQL
app.get("/estudiante/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM estudiante WHERE estudiante_Id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Enrutador para INSERTAR/PUBLICAR los detalles de un estudiante
app.post("/estudiante", (req, res) => {
  let estudiante = req.body;
  if(estudiante.estudiante_Id === undefined){
    estudiante.estudiante_Id = 0;
  }
  var sql =
    "SET @estudiante_Id = ?;SET @estudiante_Nombre1 = ?;SET @estudiante_Nombre2 = ?;SET @estudiante_Apellido = ?;SET @estudiante_correo = ?; CALL AgregarEstudiante(@estudiante_Id,@estudiante_Nombre1,@estudiante_Nombre2,@estudiante_Apellido,@estudiante_correo);";
  mysqlConnection.query(
    sql,
    [
        estudiante.estudiante_Id,
        estudiante.estudiante_Nombre1,
        estudiante.estudiante_Nombre2,
        estudiante.estudiante_Apellido,
        estudiante.estudiante_correo,
    ],
    (err, rows, fields) => {
      if (!err) res.send("Estudiante se agrego correctamente");
      else console.log(err);
    }
  );
});

//Router para ACTUALIZAR el detalle de un alumno
app.put("/estudiante", (req, res) => {
  let estudiante = req.body;
  var sql =
    "SET @estudiante_Id = ?;SET @estudiante_Nombre1 = ?;SET @estudiante_Nombre2 = ?;SET @estudiante_Apellido = ?;SET @estudiante_correo = ?; CALL AgregarEstudiante(@estudiante_Id,@estudiante_Nombre1,@estudiante_Nombre2,@estudiante_Apellido,@estudiante_correo);";
  mysqlConnection.query(
    sql,
    [
        estudiante.estudiante_Id,
        estudiante.estudiante_Nombre1,
        estudiante.estudiante_Nombre2,
        estudiante.estudiante_Apellido,
        estudiante.estudiante_correo,
    ],
    (err, rows, fields) => {
      if (!err) res.send("Detalles del estudiante actualizados con éxito.");
      else console.log(err);
    }
  );
});

//Router para BORRAR el detalle de un alumno
app.delete("/estudiante/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM estudiante WHERE estudiante_Id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Registro de estudiante eliminado con éxito.");
      else console.log(err);
    }
  );
});

// M A E S T R O
//Creando GET Router para obtener todos los detalles de los maestros de la base de datos MySQL
app.get("/maestro", (req, res) => {
    mysqlConnection.query("SELECT * FROM maestro", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });
  
  //Enrutador para OBTENER detalles específicos del maestro de la base de datos MySQL
  app.get("/maestro/:id", (req, res) => {
    mysqlConnection.query(
      "SELECT * FROM maestro WHERE maestro_Id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  //Enrutador para INSERTAR/PUBLICAR los detalles de un maestro
  app.post("/maestro", (req, res) => {
    let maestro = req.body;
    if(maestro.maestro_Id === undefined){
        maestro.maestro_Id = 0;
    }
    var sql =
      "SET @maestro_Id = ?;SET @maestro_Nombre1 = ?;SET @maestro_Nombre2 = ?;SET @maestro_Apellido = ?;SET @maestro_correoIns = ?; CALL AgregarMaestro(@maestro_Id,@maestro_Nombre1,@maestro_Nombre2,@maestro_Apellido,@maestro_correoIns);";
    mysqlConnection.query(
      sql,
      [
        maestro.maestro_Id,
        maestro.maestro_Nombre1,
        maestro.maestro_Nombre2,
        maestro.maestro_Apellido,
        maestro.maestro_correo,
      ],
      (err, rows, fields) => {
        if (!err) res.send("Maestro se agrego correctamente");
        else console.log(err);
      }
    );
  });
  
  //Router para ACTUALIZAR el detalle de un maestro
  app.put("/maestro", (req, res) => {
    let maestro = req.body;
    var sql =
    "SET @maestro_Id = ?;SET @maestro_Nombre1 = ?;SET @maestro_Nombre2 = ?;SET @maestro_Apellido = ?;SET @maestro_correoIns = ?; CALL AgregarMaestro(@maestro_Id,@maestro_Nombre1,@maestro_Nombre2,@maestro_Apellido,@maestro_correoIns);";
    mysqlConnection.query(
      sql,
      [
        maestro.maestro_Id,
        maestro.maestro_Nombre1,
        maestro.maestro_Nombre2,
        maestro.maestro_Apellido,
        maestro.maestro_correo,
      ],
      (err, rows, fields) => {
        if (!err) res.send("Detalles del maestro actualizados con éxito.");
        else console.log(err);
      }
    );
  });
  
  //Router para BORRAR el detalle de un maestro
  app.delete("/maestro/:id", (req, res) => {
    mysqlConnection.query(
      "DELETE FROM maestro WHERE maestro_Id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send("Registro de maestro eliminado con éxito.");
        else console.log(err);
      }
    );
  });