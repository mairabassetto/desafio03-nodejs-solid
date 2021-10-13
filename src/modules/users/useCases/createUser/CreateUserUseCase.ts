import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): void {
        const userAlredyExists = this.usersRepository.findByEmail(email);

        if (userAlredyExists) {
            throw new Error("User Alredy Exists.");
        }

        this.usersRepository.create({ name, email });
    }
}

export { CreateUserUseCase };
