import { useAtom } from "jotai";
import { FormEvent, useRef } from "react";
import { NAME_ATOM } from "../../atoms/name";

const JotaiChange = () => {
  const form = useRef(null);
  const [_, setName] = useAtom(NAME_ATOM);

  const clear = () => setName("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form_data = new FormData(!!form.current ? form.current : undefined);
    setName(`${form_data.get("name")}`);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-full px-2 py-12 sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 sm:px-0"
    >
      <div className="w-full px-2 mt-12 sm:px-6">
        <div className="flex flex-col mt-5">
          <label htmlFor="name" className="text-lg font-semibold leading-tight">
            Name:
          </label>
          <input
            required
            id="name"
            name="name"
            className="w-full h-10 px-2 mt-2 rounded shadow bg-gray-50 focus:outline-none"
            type="texte"
          />
        </div>
      </div>
      <div className="px-2 sm:px-6">
        <button
          type="submit"
          className="w-full px-8 py-3 mt-6 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-400"
        >
          Set Name
        </button>
        <button
          type="button"
          onClick={clear}
          className="w-full px-8 py-3 mt-6 text-sm text-white transition duration-150 ease-in-out bg-red-700 rounded focus:outline-none hover:bg-red-400"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default JotaiChange;
