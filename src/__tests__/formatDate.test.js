import { isValidDate, formatDate, setDate } from "../formatDate";
describe("isValidDate", () => {
    describe.each([
        {a: "2024-02-19", expected: true},// Dois etre vrai si la date est ok
        {a: '', expected: false},// Dois etre faux si la date n'est pas ok
      ])
    ('.add($a)', ({ a, expected }) => {
      test('retourne '+expected, () => {
        expect(isValidDate(a)).toEqual(expected);
      });
    });
}); 
describe("formatDate", () => {
    describe.each([
        {a: formatDate('2024-02-19'), expected: new Intl.DateTimeFormat('fr-FR').format(new Date('2024-02-19'))},// dois retourner une date formater si format valide
        {a: formatDate(''), expected: ''},])
    ('.add($a)', ({ a, expected }) => {
      test('retourne '+expected, () => {
        expect(a).toEqual(expected);
      });
    });
}); 
describe("setDate", () => {
    describe.each([
        {a: formatDate('2024-02-19'), expected: new Intl.DateTimeFormat('fr-FR').format(new Date('2024-02-19'))},// Dois etre vrai si la date est ok
      ])
    ('.add($a)', ({ a, expected }) => {
      test('retourne '+expected, () => {
        expect(a).toEqual(expected);
      });
    });
});