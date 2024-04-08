import { IUser } from '../interfaces';

export interface IUserRepository {
	getUser(id: number): Promise<IUser>;
}
