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

  async get (ctx: Context): Promise<void> {
    ctx.response.type = 'application/json'
    ctx.response.body = await this.service.greet()
  }
}
