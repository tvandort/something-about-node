//@ts-check

const { render } = require('./fake-component');

describe('example', () => {
  it('misses the call', () => {
    const action = jest.fn(() => {
      console.log('Missing.');
    });

    render({
      action
    });

    expect(action).toBeCalled();
  });
});
