var reverse_a_number = require('../reverse_a_number');

test('reverse the given number and the value should be as given in toBe()', () => {
    var data = 349212;
    expect(reverse_a_number(data)).toBe(212943);
});