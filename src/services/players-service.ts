import {Request, Response} from "express";
import { noContent, ok } from "../helppers/http-helper";
import { findAllPlayers } from "../repository/player";

export const getPlayerService = async ()=>{

    const data = await findAllPlayers();
    let response = null;

    if (data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response

};