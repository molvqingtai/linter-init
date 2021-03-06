import { prompt } from 'enquirer'

const initialize = async (config?: string): Promise<void> => {
  const answer = await prompt([
    {
      type: 'select',
      name: 'default',
      message: 'Please select a linter configuration?',
      choices: [
        { message: 'Default: Eslint + Prettier + Commitlint', name: 'Default' },
        { message: 'Custom: Manual selection of linter', name: 'Custom' }
      ]
    },
    {
      type: 'select',
      name: 'module',
      message: 'What type of modules does your project use?',
      choices: [
        { message: 'ESM: import/export', name: 'ESM' },
        { message: 'CommonJS: require/exports', name: 'CommonJS' }
      ]
    },
    {
      type: 'toggle',
      name: 'typescript',
      message: 'Does your project use TypeScript?',
      enabled: 'Yes',
      disabled: 'No'
    },
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework does your project use?',
      choices: ['Vue', 'React', 'Svelte', 'Lit-element', 'Vanilla']
    },
    {
      type: 'multiselect',
      name: 'linter',
      message: 'Select the linter you want to use',
      hint: 'Press <space> to select, <a> to toggle all, <i> to invert selection',
      initial: 0,
      choices: ['Eslint', 'Prettier', 'Stylelint', 'Commitlint']
    },
    {
      type: 'select',
      name: 'style',
      message: 'Which style guide do you want to follow?',
      choices: [
        { message: 'Airbnb: https://github.com/airbnb/javascript', name: 'Airbnb' },
        {
          message: 'Standard: https://github.com/standard/standard',
          name: 'Standard'
        },
        {
          message: 'Google: https://github.com/google/eslint-config-google',
          name: 'Google'
        }
      ]
    }
  ])
  console.log(answer)
}

export default initialize
