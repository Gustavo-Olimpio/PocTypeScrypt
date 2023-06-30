import joi from "joi";
import { weapon } from "@/protocols/weapon.protocol";

export const weaponSchema = joi.object<weapon>({
    name: joi.string().required(),
    type: joi.string().required(),
    price: joi.string().required(),
    damage: joi.string().required(),
    weight: joi.string().required()
})

