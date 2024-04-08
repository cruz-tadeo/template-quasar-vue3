import { AxiosHttpAdapter } from '../shared/interfaces/adapters/AxiosHttpAdapter';
import { IHttpAdapter } from '../shared/interfaces/adapters/IHttpAdapter';
import { Container } from 'inversify'
import { GetUser, IUserRepository, UserRepository } from 'src/app/users';
import { TYPES } from '../config/types'

const container = new Container()

//Repository
container.bind<IHttpAdapter>(TYPES.IHttpAdapter).to(AxiosHttpAdapter);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);


//APPLICATION
container.bind<GetUser>(TYPES.GetUser).to(GetUser);

export { container }
