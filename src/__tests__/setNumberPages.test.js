import { setNumberPages } from "../setNumberPages";

describe("setNumberPages function", () => {
  test("should return 1 when max is greater than or equal to total", () => {
    const total = 10;
    const max = 20;
    const result = setNumberPages({ total, max });
    expect(result).toBe(1);
  });

  test("should calculate number of pages correctly when max is less than total", () => {
    const total = 100;
    const max = 10;
    const result = setNumberPages({ total, max });
    expect(result).toBe(9);
  });

  test("should return 1 when total is 0", () => {
    const total = 0;
    const max = 10;
    const result = setNumberPages({ total, max });
    expect(result).toBe(1);
  });

  test("should handle default values correctly", () => {
    const result = setNumberPages({});
    expect(result).toBe(1);
  });
});