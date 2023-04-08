import GameSavingLoader from "../src/js/gamesavingloader";

test("test for method load of class GameSavingLoader", (done) => {
  const gamer = new GameSavingLoader();
  gamer.load().then((result) => {
    expect(result).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
    });
    done();
  });
});

test("test for constructor of class GameSavingLoader", () => {
  const gamer = new GameSavingLoader();
  gamer.read.then((result) => {
    const test = new Uint16Array(result);
    expect(test.length).toBe(90);
  });
});

//test("test of first return of promise", (done) => {});
