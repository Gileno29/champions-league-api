import express, {json, Request, Response} from "express"
import { getPlayer } from "./controllers/players-controller";
import router from "./routes";

function createApp(){

    const app= express()
    app.use(json())
    app.use("/api", router)
    return app

}

export default createApp;