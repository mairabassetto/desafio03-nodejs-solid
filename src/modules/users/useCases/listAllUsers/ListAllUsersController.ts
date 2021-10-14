import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const listAllUsers = this.listAllUsersUseCase.execute({
        user_id: request.header("user_id"),
      });
      return response.json(listAllUsers);
    } catch (error) {
      return response.status(400).json({ error: "User is not an admin." });
    }
  }
}

export { ListAllUsersController };
