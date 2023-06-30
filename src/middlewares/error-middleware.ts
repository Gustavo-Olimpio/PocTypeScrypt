import { error } from "@/protocols/weapon.protocol";
import { NextFunction,Request,Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error:error, req:Request, res:Response, next:NextFunction) {
  if(error.type === "not found"){
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}