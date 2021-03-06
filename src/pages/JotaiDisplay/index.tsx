import { useAtom } from "jotai";
import { NAME_ATOM } from "../../atoms/name";

const JotaiDisplay = () => {
  const [name] = useAtom(NAME_ATOM);

  return <h1>{name}</h1>;
};

export default JotaiDisplay;
