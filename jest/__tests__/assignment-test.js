

jest.dontMock('../app/assignment');  // Don't create mock functions
var math = require('../app/assignment');

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