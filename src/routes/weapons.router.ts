import { getWeapon,newWeapon,delWeapon,updateWeapon } from "@/controllers/weapons.controller";
import { weaponValidation } from "@/middlewares/validateSchema.middleware";
import {Router} from "express"

const router = Router();

router.get("/weapons",getWeapon);
router.post("/weapons", weaponValidation,newWeapon);
router.delete("/weapons/:id",delWeapon);
router.put("/weapons/:id", weaponValidation,updateWeapon);

export default router;