import { Request, Response } from 'express';

export const getProducts= (req: Request, res: Response) => {
    res.json({
        msg: 'get products'
    })
    // this.app.use(`/api/productos`)
}

export const getProduct = (req: Request, res: Response) => {

    res.json({
        msg: 'get Products'
    })
}