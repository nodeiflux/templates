const express = require('express')
const router = require('./router')

const app = express()

// @ts-ignore
const port = process.env.PORT ?? 8000

app.use(router)

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})
