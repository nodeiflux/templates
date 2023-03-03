import Controller from '@curveball/controller'
import { ObjectId } from 'mongoose'

import * as validate from './validation'

import type { LoggerContext } from 'pino-curveball'

import type { IUser } from './user'

interface UserService {
  create: (name: string, password: string) => Promise<string>
  getOne: (id: ObjectId | string) => Promise<IUser>
  getAll: () => Promise<IUser[]>
}

class BaseUserController extends Controller {
  constructor (protected readonly service: UserService) {
    super()
  }
}

export class UserCollectionController extends BaseUserController {
  async get (ctx: LoggerContext): Promise<void> {
    const users = await this.service.getAll()

    ctx.response.type = 'application/json'
    ctx.response.body = users
  }

  async post (ctx: LoggerContext): Promise<void> {
    const { name, password } = await validate.create(ctx)
    const _id = await this.service.create(name, password)

    ctx.logger.info(`User '${name}' created`)

    ctx.response.type = 'application/json'
    ctx.response.body = { _id }
  }
}

export class UserItemController extends BaseUserController {
  async get (ctx: LoggerContext): Promise<void> {

  }
}
