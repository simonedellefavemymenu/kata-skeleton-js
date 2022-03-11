import Index from '../src/index';

const IndexObject = new Index();

describe('FizzBuzz Test Suite', function (): void {

    it('return expected number 1', (): void => {

        const result: number | 'Fizz' = IndexObject.func(1);

        const expected = 1;
        expect(result).toBe(expected);
    });

    it('return expected number 2', (): void => {

        const result: number | 'Fizz' = IndexObject.func(2);

        const expected = 2;
        expect(result).toBe(expected);
    });

    it('return expected number 98 (limit case)', (): void => {

        const result: number | 'Fizz' = IndexObject.func(98);

        const expected = 98;
        expect(result).toBe(expected);
    });

    it('return expected number 3 (fizz case)', (): void => {

        const result: number | 'Fizz' = IndexObject.func(3);

        const expected = 'Fizz';
        expect(result).toBe(expected);
    });

});
