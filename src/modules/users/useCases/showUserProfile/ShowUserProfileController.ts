import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const showUserProfile = this.showUserProfileUseCase.execute({
                user_id: request.params.user_id,
            });
            return response.json(showUserProfile);
        } catch (error) {
            return response.status(404).json({ error: "User Not Exists." });
        }
    }
}

export { ShowUserProfileController };
