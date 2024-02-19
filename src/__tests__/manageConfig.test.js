import manageConfig from '../manageConfig';
const b = {headers : 'test', body: {} }
const c =  {body: {} }
const API_URL = {
    BASE: 'base',
    GITHUB: 'github',
  };
describe.each([
    {a: API_URL.BASE, b , expected: b}, //apiName === API_URL.BASE
    {a: API_URL.GITHUB, b, expected: c}, //apiName !== API_URL.BASE
])('.add($a, $b)', ({a, b, expected}) => {
    test('retourne', () => {
      const result = manageConfig(a, b);
      expect(result).toEqual(expected);
    });
});