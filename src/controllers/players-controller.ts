import {Request, Response} from "express"
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService } from "../services/players-service";
import { noContent, ok } from "../helppers/http-helper";

export const getPlayer = async (req: Request, res: Response)=>{
    const httpResponse = await getPlayerService();    
    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const getPlayerById = async (req: Request, res: Response) =>{
    const id= req.params.id


    const httpResponse = await getPlayerByIdService(parseInt(id as string, 10))
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
 
export const postPlayer = async (req: Request, res: Response)=>{
   const bodyValue = req.body 

   const httpResponse = await createPlayerService(bodyValue);
 
   if (httpResponse){
    return res.status(httpResponse.statusCode).json(httpResponse.body)

   }

   const response= await noContent()

   return res.status(response.statusCode).json(response.body)
   

}

export const deletePlayer= async(req:Request, res:Response)=>{
    const id = parseInt(req.params.id as string, 10)

    const httpResponse = await deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}