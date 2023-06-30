import { read,create,delet,put } from "@/repositories/weapon.repository";
import { weapon } from "@/protocols/weapon.protocol";

export async function readWeapon(){   
    return await read();
}
export async function createWeapon(arm:weapon): Promise<void>{
    await create(arm)
    return 
}
export async function deleteWeapon(id:number):Promise<void>{
    await delet(id)
    return
}
export async function putWeapon(id:number,arm:weapon):Promise<void>{
    await put(id,arm)
    return
}