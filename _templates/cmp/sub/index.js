const { readdirSync } = require('fs')
const { pascalCase } = require('change-case')

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

module.exports = {
  prompt: ({ prompter }) => {
    return prompter.prompt([
      {
        type: 'autocomplete',
        name: 'component',
        message: 'Add a sub component to existing component',
        limit: 10,
        initial: 2,
        choices: getDirectories(__dirname + '/../../../src/components'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (eg. product card)',
        result: (name) => pascalCase(name),
      },
    ])
  },
}
