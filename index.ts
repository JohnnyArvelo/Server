import {Servidor} from "./classes/server";
import { router } from "./routes/router";
import cors from "cors";

let server = new Servidor();

// Credenciales de seguridad
server.app.use(cors({origin:true, credentials:true}));

server.app.use('/', router)

server.start( () => {
    console.log("Entrando al servidor de " + server.port);
    
});

const nombre="Johnny Arvelo";
console.log(`mi nombre es ${nombre}`);
