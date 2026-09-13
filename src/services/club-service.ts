import { ok } from "../helppers/http-helper";
import { findAllClubs } from "../repository/clubs-repository";

export const getClubService = async() =>{
    const data = await findAllClubs()
    const response = ok(data);

    return response;

};