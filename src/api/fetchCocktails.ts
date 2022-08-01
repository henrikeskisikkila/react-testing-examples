const fetchCocktails = async (query: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  )

  let drinks = null;
  if (response.ok) {
    const json = await response.json()
    drinks = json.drinks;
  }

  return [drinks, response.ok]
}

export default fetchCocktails