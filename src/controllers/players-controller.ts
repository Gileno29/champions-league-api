import {Request, Response} from "express"
import { getPlayerByIdService, getPlayerService } from "../services/players-service";
import { ok } from "../helppers/http-helper";

export const getPlayer = async (req: Request, res: Response)=>{
    const httpResponse = await getPlayerService();    
    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const getPlayerById = async (req: Request, res: Response) =>{
    const id= req.params.id
    const httpResponse = await getPlayerByIdService(parseInt(id[0]))
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
 