const fetchCoctails = async query => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  )
  const json = await.response.json()

}