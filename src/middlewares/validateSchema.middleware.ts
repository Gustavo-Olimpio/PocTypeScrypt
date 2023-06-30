import { NextFunction, Request,Response } from "express";
import { weaponSchema } from "@/schemas/weaponSchema";

export function weaponValidation(req:Request,res:Response,next: NextFunction){

    const validation = weaponSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }
    next()
}