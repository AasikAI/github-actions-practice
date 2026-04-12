const add = require('./index');

function testAdd() {
  if (add(2, 3) !== 5) {
    throw new Error("Test failed: Expected 5");
  }
  console.log("Test passed ✅");
}

testAdd();