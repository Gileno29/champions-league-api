import express, {json, Request, Response} from "express"
import { getPlayer } from "./controllers/players-controller";
import router from "./routes";
import cors from "cors"

function createApp(){

    const app= express();
    app.use(json());
    app.use("/api", router);
    app.use(cors());
    return app

}

export default createApp;