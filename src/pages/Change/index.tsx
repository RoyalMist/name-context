import { FormEvent, useRef } from "react";
import { NameActionKind, useName } from "../../contextes/name";
const change = () => {
  let form = useRef(null);
  let { dispatcher } = useName();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form_data = new FormData(!!form.current ? form.current : undefined);
    dispatcher({ type: NameActionKind.SET, value: form_data.get("name") });
  };

  return (
    <div className="mx-auto flex justify-center items-center h-full">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 py-12 px-2 sm:px-0"
      >
        <div className="mt-12 w-full px-2 sm:px-6">
          <div className="flex flex-col mt-5">
            <label
              htmlFor="name"
              className="text-lg font-semibold leading-tight"
            >
              Name:
            </label>
            <input
              required
              id="name"
              name="name"
              className="h-10 px-2 w-full bg-gray-50 rounded mt-2 focus:outline-none shadow"
              type="texte"
            />
          </div>
        </div>
        <div className="px-2 sm:px-6">
          <button
            type="submit"
            className="focus:outline-none w-full text-white transition duration-150 ease-in-out bg-indigo-700 hover:bg-indigo-400 rounded px-8 py-3 text-sm mt-6"
          >
            Set Name
          </button>
          <button
            type="button"
            onClick={() => {
              dispatcher({ type: NameActionKind.CLEAR });
            }}
            className="focus:outline-none w-full text-white transition duration-150 ease-in-out bg-red-700 hover:bg-red-400 rounded px-8 py-3 text-sm mt-6"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default change;
