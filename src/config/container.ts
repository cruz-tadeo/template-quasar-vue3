import { Container } from 'inversify'
import { TYPES } from 'src/config/types'

const container = new Container()

// container.bind<IHttpAdapter>(TYPES.IHttpAdapter).to(AxiosHttpAdapter)
// container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)
// container.bind<GetUsers>(TYPES.GetUsers).to(GetUsers)

export { container }
