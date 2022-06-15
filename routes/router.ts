import { Router, Request, Response } from "express";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "todo ok!"
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

