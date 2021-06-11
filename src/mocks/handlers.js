import { rest } from "msw";

import mockResponse from "./mockResponse";

export const handlers = [
  rest.get(
    "http://18.224.200.47/products/list",
    (request, response, context) => {
      return response(context.status(200), context.json(mockResponse));
    }
  ),
];
