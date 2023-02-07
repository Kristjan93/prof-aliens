const { pascalCase } = require('change-case')
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name (eg. product card)',
    result: (name) => pascalCase(name),
  },
]
