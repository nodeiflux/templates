#!/usr/bin/env node
import { exit } from 'node:process'
import { createNodeiflux } from './lib'
import * as args from './lib/args'
import * as prompt from './lib/prompt'
import ora from 'ora'

/* TODO: Find a way to generate this */
const templates = [
  'express'
]

async function main () {
  let { template, destination } = args.parse(process.argv)
  if (!template) template = await prompt.template(templates)

  const spinner = ora('Creating template').start()
  const output = await createNodeiflux(template, destination)

  output.subscribe({
    next: msg => spinner.succeed().start(msg),
    complete () {
      spinner.succeed()
      exit(0)
    },
    error(error) {
      if (error.code === 'DEST_NOT_EMPTY') {
        /* TODO: Allow force to override */
        spinner.fail('Failure: Destination not empty.')
      } else {
        spinner.fail(`Failure: ${error.message ?? 'Unknown error'}`)
      }

      exit(1)
    },
  })
}

main().catch(error => {
  console.error(error)
  exit(1)
})
