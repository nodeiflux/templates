import router from '@curveball/router'

/* Router handles providing dependencies for the default case */
import Home from './home/controller'
import * as HomeService from './home/service'

import { UserCollectionController } from './user/controller'
import * as UserService from './user/service'

export default [
  router('/', new Home(HomeService)),
  router('/users', new UserCollectionController(UserService))
]
