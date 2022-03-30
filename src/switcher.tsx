import { useState } from "react";
import { NameProvider } from "./contextes/name";
import Change from "./pages/Change";
import Display from "./pages/Display";
import JotaiChange from "./pages/JotaiChange";
import JotaiDisplay from "./pages/JotaiDisplay";

const Switcher = () => {
  const [context, setContext] = useState(true);
  const switching = () => setContext((c) => !c);

  return (
    <div className="flex flex-col items-center justify-center h-full mx-auto">
      <button
        type="button"
        onClick={switching}
        className="px-8 py-3 mt-6 text-sm text-white transition duration-150 ease-in-out bg-purple-700 rounded focus:outline-none hover:bg-purple-400"
      >
        Switch
      </button>

      {context && (
        <NameProvider>
          <h1>With Context</h1>
          <Change />
          <Display />
          <Display />
          <Display />
        </NameProvider>
      )}
      {!context && (
        <>
          <h1>With Jotai</h1>
          <JotaiChange />
          <JotaiDisplay />
          <JotaiDisplay />
          <JotaiDisplay />
        </>
      )}
    </div>
  );
};

export default Switcher;
