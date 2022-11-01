import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

interface Arguments {
  destination: string
  template: string | undefined
}

export function parse (argv: string[]): Arguments {
  const parsed = yargs(hideBin(argv))
    .option('path', {
      alias: 'p',
      describe: 'output directory',
      default: '.'
    })
    .string('_') /* this forces args to string */
    .parseSync()

  return {
    destination: parsed.path,
    template: parsed._[0] as string | undefined /* but types don't reflect that */
  }
}
