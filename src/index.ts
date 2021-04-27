#!/usr/bin/env node

import { Command } from 'commander'
import ask from './ask'

void (async () => {
  const program = new Command()
  program.version('linter-init v0.0.1', '-v, --version', 'Output linter-init version')
  program.command('init').description('Initialize linter configuration').action(ask)
  program.parse(process.argv)
})().catch((error) => {
  console.log(error.message)
  // eslint-disable-next-line no-debugger
  debugger
})
