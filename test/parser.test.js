import json from "../src/js/parser";
import read from "../src/js/reader";

test("test for function json", (done) => {
  read().then((response) => {
    json(response).then((result) => {
      expect(result).toBe(
        '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
      );
      done();
    });
  });
});
