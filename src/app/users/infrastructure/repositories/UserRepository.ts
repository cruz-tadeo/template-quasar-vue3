import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { TYPES } from 'src/config/types';
import { IHttpAdapter } from 'src/shared/interfaces/adapters/IHttpAdapter';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IUser } from '../../domain';

@injectable()
export class UserRepository implements IUserRepository {
	private _httpAdapter: IHttpAdapter;
	constructor(@inject(TYPES.IHttpAdapter) httpAdapter: IHttpAdapter) {
		this._httpAdapter = httpAdapter;
	}

	async getUser(id: number): Promise<IUser> {
		const data: IUser = await this._httpAdapter.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);

		return data;
	}
}
