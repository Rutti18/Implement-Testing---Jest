const array = require('../arrayLength');

/*
Use .toHaveLength to check that an object has a .length property and it is set to a certain numeric value.
This is especially useful for checking arrays or strings size.
*/
var app = [1,2,3,4,5];
test('array value should be equal to', () => {
    expect(array(app)).toHaveLength(5);
});
  