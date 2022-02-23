const modules = require('./script.js');

describe('stringLength', () => {

    test('returns the string length', () => {
        const string = 'test';

        const length = modules.stringLength(string);

        expect(length).toEqual(4);
    });

    test('string length less than 1', () => {

        const string = '';

        expect(() => modules.stringLength(string)).toThrowError(
            'string length is less than 1'
        );
    });

    test('string length greater than 10', () => {
        const string = 'Kigali is the captal city';

        expect(() => modules.stringLength(string)).toThrowError(
            'string length is greater than 10'
        );
    });
});

describe('reversedString', () => {

    test('to check if string is reversed', () => {
      const sample = 'levy';

      expect(modules.reverseString(sample)).toMatch('yvel');
    })
})

describe('calculator', () => {
    const a = 4;
    const b = 2;

    const example = new modules.calculator();

    test('add a and b to equal 6', () => {
        const result = example.add(a, b);

        expect(result).toEqual(6);
    });

    test('subtract a and b to equal 2', () => {
        const result = example.subtract(a, b);

        expect(result).toEqual(2);
    });

    test('divide a and b to equal 2', () => {
        const result = example.divide(a, b);

        expect(result).toEqual(2);
    });

    test('multiply a and b to equal 6', () => {
        const result = example.multiply(a, b);

        expect(result).toEqual(8);
    });
});

describe('capitalizeString', () => {

  test('first letter of string to be capitalized', () => {

      const string = 'levy';
      
      expect(modules.capitalizeString(string)).toBe('Levy');
  })
});
  