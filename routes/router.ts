import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes',(req: Request, res: Response)=>{
    res.json({
        ok:true,
        mensaje: 'Get Good'
    });
});

router.post('/mensajes', (req: Request, res: Response)=>{
    var cuerpo = req.body.cuerpo;
    const de = req.body.de;

    cuerpo = cuerpo + ", si modifica"

    res.json({
        ok: true,
        cuerpo,
        de
    });
    // cuerpo:cuerpo
});

router.delete('/mensajes/:id', (req: Request, res: Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    var  id = req.params.id;
    id = id + " , el id de Delete"
    res.json({
        ok:true,
        cuerpo,
        de,
        id
    });
    // cuerpo:cuerpo
});



export default router;