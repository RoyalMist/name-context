import { useQuery } from "react-query";

const Chuck = () => {
  const { isLoading, error, data } = useQuery("fact", () =>
    fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Ooops...</h1>;

  return (
    <div className="flex flex-col items-center justify-center h-full mx-auto">
      <h1>{data.value}</h1>
    </div>
  );
};

export default Chuck;
