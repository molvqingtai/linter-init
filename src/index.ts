#!/usr/bin/env node

// import inquirer from 'inquirer'
import { Command } from 'commander'
const program = new Command()

void (async () => {
  program.version('linter-init v0.0.1', '-v, --version', 'Output linter-init version')
  program.command('init').description('Initialize linter configuration')
  program.parse(process.argv)
})().catch((error) => {
  console.log(error.message)
})
