import { useName } from "../../contextes/name";

const Display = () => {
  let { name } = useName();

  return <h1>{name}</h1>;
};

export default Display;
