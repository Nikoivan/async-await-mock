import GameSavingLoader from '../src/js/gamesavingloader';
import read from '../src/js/reader';

jest.mock('../src/js/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

jest.setTimeout(15000);

const gamer = new GameSavingLoader();

test('test with mock of class GameSavingLoader', async () => {
  try {
    read.mockRejectedValueOnce(new Error('Async error message'));
    await gamer.load;
  } catch (error) {
    expect(error.message).toEqual('Async error message');
  }
});
