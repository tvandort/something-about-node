//@ts-check
const { utilWait, mockTimeout } = require('./utils');

jest.mock('./network-calls', () => ({
  delay: async ({ action }) => {
    await mockTimeout();
    return action();
  }
}));

const { render } = require('./fake-component');

describe('example 2', () => {
  it('does not miss the call', async () => {
    const action = jest.fn();

    render({
      action
    });

    // Uncomment below line.
    // await utilWait();

    expect(action).toBeCalled();
  });

  it('does not miss the call', done => {
    const action = jest.fn();

    render({
      action
    });

    // Uncomment below line.
    // utilWait(() => {
    //   expect(action).toBeCalled();
    //   done();
    // });
  });
});
