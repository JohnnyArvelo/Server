import { Router, Request, Response } from "express";
import { Socie } from "../classes/socie";
import { Socio } from "../model/socie.model";
export const router = Router();

let socies : Array<Socio> = [
    { nombre:"Mark",
    apellido:"Evans",
    nick:"Inazuma",
    edad:16
    },

    { nombre:"Dio",
    apellido:"Brando",
    nick:"Zawuardo",
    edad:1000,
    },

    { nombre:"Nahuel",
    apellido:"Calveira",
    nick:"Origin",
    edad:21,
    },

    { nombre:"Luffy",
    apellido:"Monkey D.",
    nick:"Mugiwara no luffy",
    edad:19,
    },
 ]


router.get('/socies', (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        socies: socies
    });
});

router.get("/socie/:nick", (req: Request, res:Response) => {
    let ficha:Socio = { nombre :"", apellido:"",nick:"",edad: 0};
    socies.forEach((socie:Socio) => {
        if (socie.nick === req.params.nick){
            ficha=socie;
        }
    });
    res.json({
        ok:true,
        socie:ficha
    })
    console.log();
    
});

router.post ("/edit-socie/:nick", (req: Request, res: Response) => {
    socies.forEach(socie => {
        if (socie.nick === req.params.nick){
            socie.nick = req.body.nick;
            socie.apellido = req.body.apellido;
            socie.edad = Number(req.params.edad);
            socie.nombre = req.body.nombre;
        }
    });
    res.json({
        socies:socies
    })
});

router.post("/registro",(req:Request,res:Response) =>{
    let nombre:string;
    let apellido:string;

//Valido el campo del nombre//
if (req.body.nombre && req.body.nombre !== ""){
    nombre=req.body.nombre;
}
else{
    res.json({
        ok:false,
        mensaje: "Error: Puso mal el campo del nombre"
    });
    nombre=""
}

apellido=req.body.apellido?req.body.apellido:"";

res.json({
    ok:true,
    mensaje:`Bienvenido ${nombre}${apellido} a su nuevo mundo`
})
});

