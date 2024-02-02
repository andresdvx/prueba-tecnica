import express from "express";
import cors from "cors";
import conn from "../batabase/db.connection.js";
import clienteRouter from "../routes/Clientes.routes.js";
import fileUpload from "express-fileupload";
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = "/api";
    this.middlewares();
    this.database();
    this.router();
  }

  async database() {
    await conn
      .getConnection()
      .then((connection) => {
        console.log("conectado a la base datos");
        connection.release();
      })
      .catch((err) => {
        console.error(
          "ha ocurrido un error al conectar a la base de datos",
          err
        );
      });
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
  }

  router() {
    this.app.use(this.path, clienteRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server on port ${this.port}`);
    });
  }
}

export default Server;
