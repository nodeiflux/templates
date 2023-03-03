import { Application } from '@curveball/core'
import problem from '@curveball/problem'
import bodyParser from '@curveball/bodyparser'
import { pinoLogger } from 'pino-curveball'

import type { Middleware } from '@curveball/core'

export const createApp = (routes: Middleware[]): Application => {
  const app = new Application()
  app.use(pinoLogger())
  app.use(problem()) /* Handle errors with the application/problem+json standard. */
  app.use(bodyParser())
  app.use(...routes)

  return app
}
