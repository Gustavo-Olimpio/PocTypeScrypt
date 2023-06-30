import { Request,Response } from "express";
import { readWeapon,createWeapon,deleteWeapon,putWeapon } from "@/services/weapons.service";
import httpStatus from "http-status";
import { weapon} from "@/protocols/weapon.protocol";

export async function getWeapon(req:Request,res:Response){
    const array: weapon[] = await readWeapon();
    res.send(array).status(httpStatus.OK)
}
export async function newWeapon(req:Request,res:Response){
    const arm = req.body as weapon
    await createWeapon(arm)
    res.sendStatus(httpStatus.CREATED)
}
export async function updateWeapon(req:Request,res:Response){
    const {id} = req.params 
    const arm = req.body as weapon
    await putWeapon(parseInt(id),arm)
    res.status(httpStatus.OK).send("Changed")
   
}
export async function delWeapon(req:Request,res:Response){
    const {id} = req.params 
    await deleteWeapon(parseInt(id))
    res.status(httpStatus.OK).send("Deleted item")
}

