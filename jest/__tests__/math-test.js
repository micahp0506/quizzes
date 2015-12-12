// Load the file that exports the functionality to test
jest.dontMock('../app/math');  // Don't create mock functions
var math = require('../app/math');

// checkWordCount function
describe('checkWordCount', function() {
  it('defines checkWordCount function', function() {
    expect(math.checkWordCount).toBeDefined();
  });

  it('checks the text to make sure is less than 100 characters', function() {
    expect(math.checkWordCount("Yo, what up?")).toBe(true);
  });
});

// duplicateCheck function
describe('duplicateCheck', function() {
  it('defines duplicateCheck function', function() {
    expect(math.duplicateCheck).toBeDefined();
  });

  it('checks the text to make sure no dupicate words', function() {
    expect(math.duplicateCheck("Yo Yo Yo, what up?")).toBe(false);
  });
});

// verifyAlphaNumeric function
describe('verifyAlphaNumeric', function() {
  it('defines verifyAlphaNumeric function', function() {
    expect(math.verifyAlphaNumeric).toBeDefined();
  });

  it('checks the text to make sure non alphanumerics dont exits', function() {
    expect(math.verifyAlphaNumeric("Yo, $$$$ what up?")).toBe(false);
  });
});

// // Test to verify the math.sum() function
// describe('sum', function() {
//   it('defines a sum function', function() {
//     expect(math.sum).toBeDefined();
//   });

//   it('adds 5 + 2 to equal 7', function() {
//     expect(math.sum(2, 5)).toBe(7);
//   });
// });

// // Test to verify the math.difference() function
// describe('difference', function() {
//   it('defines a difference function', function() {
//     expect(math.difference).toBeDefined();
//   });

//   it('subtracts 5 - 2 to equal 3', function() {
//     expect(math.difference(5, 2)).toBe(3);
//   });
// });

// // Test to verify the math.product() function
// describe('product', function() {
//   it('defines a product function', function() {
//     expect(math.product).toBeDefined();
//   });

//   it('mutiplies 2 * 5 to equal 10', function() {
//     expect(math.product(2, 5)).toBe(10);
//   });
// });

// // Test to verify the math.quotient() function
// describe('quotient', function() {
//   it('defines a quotient function', function() {
//     expect(math.quotient).toBeDefined();
//   });

//   it('divides 10 / 2 to equal 5', function() {
//     expect(math.quotient(10, 2)).toBe(5);
//   });
// });