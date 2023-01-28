import Controller from '@curveball/controller'
import { Context } from '@curveball/core'

interface HomeService {
  greet: () => Promise<{ message: string }>
}

export default class HomeController extends Controller {
  constructor (
    private readonly service: HomeService
  ) {
    super()
  }

  get (ctx: Context): void {
    ctx.response.type = 'application/json'
    ctx.response.body = this.service.greet()
  }
}
