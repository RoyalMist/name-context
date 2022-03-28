import { useName } from "../../contextes/name";

const Display = () => {
  let { name } = useName();

  return (
    <div className="flex justify-center align-middle">
      <h1>{name}</h1>
    </div>
  );
};

export default Display;
