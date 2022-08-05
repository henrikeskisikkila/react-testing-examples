import { gql, useQuery } from "@apollo/client";
import Dog from "./Dog";
export const DOGS = gql`
  query GetDogs {
    dogs {
      id
      name
      breed
      photo
    }
  }
`;

function Dogs() {
  const { loading, error, data } = useQuery(DOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return data.dogs.map((dog: any, index: number) => {
    return <Dog key={index} {...dog} />;
  });
}

export default Dogs;
