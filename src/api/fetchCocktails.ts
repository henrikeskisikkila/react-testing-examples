const fetchCocktails = async (query: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  )
  if (!response.ok) {
    console.error(response.statusText)
    return
  }
  const json = await response.json()
  return json.drinks
}

export default fetchCocktails