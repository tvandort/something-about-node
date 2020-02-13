// @ts-check

const mockTimeout = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

const utilWait = async (done = () => {}) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
      done();
    }, 0)
  );
};

module.exports = {
  utilWait,
  mockTimeout
};
