const array = require('../arrayLength');

var app = [1,2,3,4,5];
test('array value should be equal to', () => {
    expect(array(app)).toHaveLength(5);
});
  