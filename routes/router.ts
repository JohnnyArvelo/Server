import { Router, Request, Response } from "express";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "todo ok!"
    });
});

router.post("/registro",(req:Request,res:Response) =>{
    const nombre=req.body.nombre;
    res.json({
        ok:true,
        mensaje:`Bienvenido ${nombre} a su nuevo mundo`
    })
});