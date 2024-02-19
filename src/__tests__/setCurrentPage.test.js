import { setCurrentPage } from "../setCurrentPage";

describe.each([
    {a: 1, b: 1, expected: 1},// test setPage
    {a: 0, b: 1, expected: 1},// test Max 0
    {a: 10, b: 0, expected: 1},// test skip 0 
  ])('.add($a, $b)', ({a, b, expected}) => {
    test('retourne ${expected}', () => {
      expect(setCurrentPage({ max: a, skip: b })).toEqual(expected);
    });
  });