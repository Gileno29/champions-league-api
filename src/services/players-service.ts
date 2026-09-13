import {Request, Response} from "express";
import { noContent, ok } from "../helppers/http-helper";
import { findAllPlayers, findPlayerById } from "../repository/player";

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


export const getPlayerByIdService = async(id: number)=>{

    const data = await findPlayerById(id)
    let response = null;


    if(data){
        response = ok(data);
    }else{
        response= noContent();
    }

    return response;
}