var find_is_prime = require('../tohavereturned');

describe('to have return some value', () => {
    test('tests public function', () => {
        const testFunction = jest.fn(() => true);
        testFunction();
        expect(testFunction).toHaveReturned();
      });
});