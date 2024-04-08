import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { TYPES } from 'src/config/types';
import { IUser, IUserRepository } from '../domain';

@injectable()
export class GetUser {
	private _userRepository: IUserRepository;

	constructor(
		@inject(TYPES.IUserRepository) private userRepository: IUserRepository
	) {
		this._userRepository = userRepository;
	}

	async execute(id: number): Promise<IUser> {
		return await this.userRepository.getUser(id);
	}
}
