const { prettier } = require('@tsword/linter');
module.exports = {
  ...prettier,
  endOfLine: 'auto'
};
