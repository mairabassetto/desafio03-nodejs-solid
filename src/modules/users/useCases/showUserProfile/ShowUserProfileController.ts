import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const show = this.showUserProfileUseCase.execute({ user_id });

        return response.send(show);
    }
}

export { ShowUserProfileController };
