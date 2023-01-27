import Controller from '@curveball/controller'
import { Context } from '@curveball/core'
import * as HomeService from './service'

class HomeController extends Controller {

  get (ctx: Context) {

    ctx.response.type = 'application/json'
    ctx.response.body = HomeService.greet()

  }

}

export default new HomeController()
