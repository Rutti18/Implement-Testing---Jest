var tohavebeencalled = require('../tohavebeencalled');

describe('to have been called', () => {
    test('tests public function', () => {
        const testFunction = jest.fn(() => true);
        testFunction();
        expect(testFunction).toHaveBeenCalled();
      });
});
