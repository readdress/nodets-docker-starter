import { Application, Router } from "express";

import HomeController from "./Controllers/HomeController";

export default (app: Application): Application => {
	const router = Router();
    
	router.get("/", HomeController.index);
    
	app.use(router);
    
	return app;
};
