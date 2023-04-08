import read from '../src/js/reader';

jest.setTimeout(15000);

test('test of function read', (done) => {
  read().then((result) => {
    const test = new Uint16Array(result);
    expect(test.length).toBe(90);
    done();
  });
});
