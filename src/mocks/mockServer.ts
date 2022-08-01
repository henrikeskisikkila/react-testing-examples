import { setupWorker, rest } from "msw"

const drinks = [
  {
    idDrink: "11457",
    strDrink: "Gin Fizz",
    strInstructions:
      "Shake all ingredients with ice cubes, except soda water.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
  },
];

const worker = setupWorker(
  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ drinks })
      )
    }
  )
)

export { worker }