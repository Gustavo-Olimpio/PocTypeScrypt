import { weapon } from "@/protocols/weapon.protocol";
import db from "@/database/database.connection";

  export async function read(){
    const arms = await db.query(`SELECT * FROM weapons`);
    return arms.rows
  }

  export async function create(weapon:weapon) : Promise<void>{
    const {name,type,price,damage,weight} = weapon
    await db.query(`INSERT INTO weapons 
    (name,type,price,damage,weight) 
    VALUES ($1,$2,$3,$4,$5);
    `,[name,type,price,damage,weight]);
    return 
  }

  export async function delet(id:number) : Promise<void>{
    const arm = await db.query(`SELECT * FROM weapons WHERE id=$1;`,[id])
    if(!arm.rows[0]) {
      throw {type:"not found",message:"Invalid ID"}
    }
    await db.query(`DELETE FROM weapons WHERE id=$1;`,[id]);
    return 
  }

  export async function put(id:number,weapon:weapon): Promise<void>{
    const arm = await db.query(`SELECT * FROM weapons WHERE id=$1;`,[id])
    if(!arm.rows[0]) {
      throw {type:"not found",message:"Invalid ID"}
    }
    const {name,type,price,damage,weight} = weapon
    await db.query(`UPDATE weapons SET name=$1,type=$2,price=$3,damage=$4,weight=$5 WHERE id=$6`,[name,type,price,damage,weight,id]);
    return
  }