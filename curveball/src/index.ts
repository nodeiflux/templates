/* eslint no-console:0 "@typescript-eslint/no-var-requires": 0 */
import app from './app'
import { env } from './env'

console.log('⚾ Curveball v%s', require('@curveball/core/package.json').version)

app.listen(env.PORT)

console.log(`Running on port ${env.PORT}`)
