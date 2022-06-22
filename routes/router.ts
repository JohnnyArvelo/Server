import { Router, Request, Response } from "express";
import { Socie } from "../classes/socie";
import { Socio } from "../model/socie.model";
export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    
    let socies : Array<Socio> = [
        { nombre:"Mark",
        apellido:"Evans",
        nick:"inazuma",
        edad:16,
        },

        { nombre:"Dio",
        apellido:"Brando",
        nick:"Wauardo",
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

    res.json({
        ok: true,
        socies: socies
    });
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

