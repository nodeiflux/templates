import { readdirSync } from "node:fs"
import { resolve } from "node:path"

module.exports = readdirSync(resolve(__dirname, '../../templates'))
