import { buildResponse } from "../buildResponse";
import { STATUS_API } from "../setResponseError";

describe("buildResponse", () => {
  const mockResponse = {
    status: 200,
    json: jest.fn(() => ({ mockData: "response data" })),
    text: jest.fn(() => "mock text response"),
    blob: jest.fn(() => "mock blob response"),
  };

  const mockConfig = {
    blob: false,
    text: false,
  };

  const mockComputeDataError = jest.fn(() => Promise.resolve("mock error"));

  test("dois retourner une erreur quand le status est error", async () => {
    const errorResponse = { status: `${STATUS_API.ERROR}500` };
    await expect(
      buildResponse(errorResponse, mockConfig, mockComputeDataError)
    ).rejects.toEqual("mock error");
    expect(mockComputeDataError).toHaveBeenCalledWith(errorResponse);
  });

  test("dois retourner une erreur pour le status warning", async () => {
    const warningResponse = { status: `${STATUS_API.WARNING}400` };

    await expect(
      buildResponse(warningResponse, mockConfig, mockComputeDataError)
    ).rejects.toEqual("mock error");

    expect(mockComputeDataError).toHaveBeenCalledWith(warningResponse);
  });

  test("dois retourner un JSON quand OK", async () => {
    const successResponse = { status: `${STATUS_API.SUCCESS}200`, ...mockResponse };

    const result = await buildResponse(
      successResponse,
      mockConfig,
      mockComputeDataError
    );

    expect(result).toEqual({
      mockData: "response data",
      statusHttp: successResponse.status,
    });
  });
});