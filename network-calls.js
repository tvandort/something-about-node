// @ts-check

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const delay = async ({ action, ms = 3000 }, ...args) => {
  await timeout(ms);
  return action(...args);
};

module.exports = {
  delay,
  timeout
};
