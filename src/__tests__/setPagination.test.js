import { setPagination } from "../setPagination";
import { setCurrentPage } from "../setCurrentPage";
import { setNumberPages } from "../setNumberPages";

jest.mock("../setCurrentPage");
jest.mock("../setNumberPages");

describe.each([
  [100, 20, 10, 100, 10, 10, 3],
  [50, 0, 20, 50, 20, 3, 1],
  [10, 0, 5, 10, 5, 2, 1],
])(
  "setPagination({ total: %i, skip: %i, max: %i })",
  (
    total,
    skip,
    max,
    expectedTotal,
    expectedNumberItems,
    expectedNumberPages,
    expectedCurrentPage
  ) => {
    test("returns the expected pagination object", () => {
      setCurrentPage.mockReturnValueOnce(expectedCurrentPage);
      setNumberPages.mockReturnValueOnce(expectedNumberPages);

      const pagination = setPagination({ total, skip, max });
      expect(pagination.total).toBe(expectedTotal);
      expect(pagination.numberItems).toBe(expectedNumberItems);
      expect(pagination.numberPages).toBe(expectedNumberPages);
      expect(pagination.currentPage).toBe(expectedCurrentPage);
      expect(setCurrentPage).toHaveBeenCalledWith({ max, skip });
      expect(setNumberPages).toHaveBeenCalledWith({ total, max });
    });
  }
);