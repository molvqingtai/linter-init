#!/usr/bin/env node

import { Command } from 'commander'
import initialize from './initialize'

void (async () => {
  const program = new Command()
  program.version('linter-init v0.0.1', '-v, --version', 'Output linter-init version')
  program.command('init').description('Initialize linter configuration').action(initialize)
  program.parse(process.argv)
})().catch((error) => {
  console.log(error.message)
  // eslint-disable-next-line no-debugger
  debugger
})
