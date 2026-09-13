import {Request, Response} from "express";
import { badRequest, created, noContent, ok } from "../helppers/http-helper";
import { deleteOnePlayer, findAllPlayers, findPlayerById, inserPlayer } from "../repository/player";

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


    if(data!==undefined){
        response = ok(data);
    }else{
        response= noContent();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel)=>{
    let response= null
    if(Object.keys(player).length!==0){
      await inserPlayer(player)
      response= created()
    }else{
        response=badRequest();
    }

    return response;
    
}

export const deletePlayerService= async(id: number)=>{
    let response=null;
    await deleteOnePlayer(id);

    response = ok({message: "deleted"})

    return response

}