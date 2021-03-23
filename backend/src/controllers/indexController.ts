import { Request, Response } from "express";

class IndexController {
  index(req: Request, res: Response) {
    res.json({ text: "Ruta inicial del mantenedor de empleados con mean." });
  }
}

export const indexController = new IndexController();