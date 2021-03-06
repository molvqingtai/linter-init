import { prompt } from 'enquirer'

const initialize = async (config?: string): Promise<void> => {
  const answer = await prompt([
    {
      type: 'select',
      name: 'default',
      message: 'Please select a linter configuration?',
      choices: [
        { hint: 'Eslint + Prettier + Commitlint', message: 'Default', name: 'Default' },
        { hint: 'Manually select features', message: 'Customize', name: 'Customize' }
      ]
    },
    {
      type: 'select',
      name: 'module',
      message: 'What type of modules does your project use?',
      choices: [
        { hint: 'import/export', message: 'ESM', name: 'ESM' },
        { hint: 'require/exports', message: 'CommonJS', name: 'CommonJS' }
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
      choices: ['Vue', 'React', 'Lit-element', 'Vanilla']
    },
    {
      type: 'multiselect',
      name: 'linter',
      message: 'Select the linter you want to use',
      hint: 'Press <space> to select, <a> to toggle all, <i> to invert selection',
      choices: ['Eslint', 'Prettier', 'Stylelint', 'Commitlint']
    }
  ])
  console.log(answer)
}

export default initialize
