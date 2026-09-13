import {Request, Response} from "express";
import { noContent, ok } from "../helppers/http-helper";

export const getPlayerService = async ()=>{

    const data ={player:"ronaldo"};
    let response = null;

    if (!data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response

};