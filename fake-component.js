// @ts-check
const { delay } = require('./network-calls');

const render = ({ action, ms = 3000 }, ...args) => {
  console.log('before');
  delay({ action, ms }, args);
  console.log('after');
};

module.exports = {
  render
};
