const DotEnv = require('../DotEnv')
const blackListRemover = require('../../../src/utils/blackListRemover')

it('Should be an instance of an object', () => {
  expect(new DotEnv()).toBeInstanceOf(Object)
})

describe('blackList methods', () => {
  const blackList = ['envTest', 'envConfig']
  const env = {
    env: 'env',
    envConfig: 'envConfig',
  }

  it('Should have been called blackListRemover and return something', () => {
    const mock = jest.fn(blackListRemover(env, blackList));
    mock();

    expect(mock).toHaveReturned();
  })

  it('Should remove blacklisted items', () => {
    const envToArray = Object.values(env)
    expect(envToArray).toHaveLength(1)
  })
})
