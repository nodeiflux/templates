import { env } from './env'
import { createApp } from './app'
import routes from './routes'

async function main (): Promise<void> {
  const app = createApp(routes)
  app.listen(env.PORT)
}

main()
  .then(() => {})
  .catch(error => {
    throw new Error('Unhandled error in main()', { cause: error })
  })
