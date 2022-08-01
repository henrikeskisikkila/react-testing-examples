
import { rest } from 'msw'

import { setupServer } from "msw/node";

const handlers = [
  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          drinks: [
            {
              idDrink: 1,
              strDrink: "Mock Drink",
              strDrinkThumb: "link/drink.jpg",
              strInstructions: "Mock Instructions"
            }
          ]
        })
      )
    }
  )
];

export const mockServer = setupServer(...handlers)

