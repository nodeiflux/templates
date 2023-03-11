const app = require('./app')
const routes = require('./routes')

const port = process.env.PORT ?? 8000

async function main () {
  console.log('Application starting')

  const server = app.load(routes).listen(port, () => {
    console.info(`Application listening on port ${port}`)
  })

  server.on('error', console.error.bind(console))
}

main()
