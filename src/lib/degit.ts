import degit from 'degit'
import { map, Observable } from 'rxjs'

const repo = 'nodeiflux/templates'
const options: degit.Options = {
  cache: true,
  verbose: false,
  mode: 'tar'
}

const prettyNames = new Map<degit.InfoCode, (a: string, b: string, i: degit.Info) => string>([
  ['DOWNLOADING', (a, b, i) => `Downloading ${i.repo}`],
  ['SUCCESS', (a, b) => `Created template ${a} in ${b}`],
  ['USING_CACHE', () => `Using cached repo`]
])

export function scaffold (template: string, destination: string): Observable<string> {
  const emitter = degit(`${repo}/templates/${template}`, options)

  const output = new Observable<degit.Info>(sub => {
    const next = (msg: degit.Info) => sub.next(msg)

    emitter.on('info', (msg) => {
      if (msg.code === 'SUCCESS') {
        setImmediate(() => sub.complete())
      }
      return next(msg)
    })
    .on('warn', next)
    .clone(destination)
    .catch(error => sub.error(error))
  }).pipe(map(v => {
    const pretty = prettyNames.get(v.code as degit.InfoCode) ?? (() => v.code)

    return pretty(template, destination, v)
  }))

  return output
}
