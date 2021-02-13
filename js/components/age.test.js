import { age } from './age.js';

describe('Vailduojamos tinkamo tipo reiksmes', () => {
    test('jei 1990, tai uzeik', () => {
        expect(age(1990)).toBe('Uzeik');
    });

    test('jei 2010, tai palauk', () => {
        expect(age(2010)).toBe('Palauk');
    });
});
