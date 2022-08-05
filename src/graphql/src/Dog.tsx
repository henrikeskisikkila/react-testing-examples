/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export interface DogProps {
  id: string;
  name: string;
  breed: string;
  photo: string;
}

function Dog({ id, name, breed, photo }: DogProps) {
  return (
    <div key={id} css={css({ margin: "4em" })}>
      <h2>{name}</h2>
      <h4>{breed}</h4>
      <img width="400" alt={breed} src={`${process.env.PUBLIC_URL}/${photo}`} />
    </div>
  );
}

export default Dog;
