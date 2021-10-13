import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ShowUserProfileUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): void {
        const userAlredyExists = this.usersRepository.findById(user_id);
        if (userAlredyExists) {
            throw new Error("User Alredy Exists!");
        }

        this.usersRepository.findById(user_id);
    }
}

export { ShowUserProfileUseCase };
