import { Request, Response } from "express";

class HomeController {

	public static async index(request: Request, response: Response) {
		response.send("Hello from NodeTS in Docker");
	}

}

export default HomeController;
