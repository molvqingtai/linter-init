import { prompt } from 'enquirer'

const initialize = async (config?: string): Promise<void> => {
  const answer = await prompt([
    {
      type: 'select',
      name: '',
      message: 'Please pick a config',
      choices: ['Default: Eslint + Prettier + Commitlint', 'Manually select features']
    }
  ])
  console.log(answer)
}

export default initialize
