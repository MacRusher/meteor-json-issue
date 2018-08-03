// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by example.js.
import { data } from "meteor/example";

Tinytest.add('json file data', function (test) {
  test.equal(data, { "example": 42 });
});
