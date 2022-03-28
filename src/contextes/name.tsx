import * as React from "react";
import { useReducer } from "react";

enum NameActionKind {
  SET,
  CLEAR,
}

interface NameAction {
  type: NameActionKind;
  value?: string;
}

interface State {
  name: string;
}

interface Context {
  name: string;
  dispatcher: React.Dispatch<NameAction>;
}

interface Props {
  children: React.ReactNode;
}

const NameContext = React.createContext<Context>({
  name: "",
  dispatcher: () => null,
});

const nameReducer = (_: State, action: NameAction): State => {
  const { type, value = "" } = action;
  switch (type) {
    case NameActionKind.SET: {
      return { name: value };
    }

    case NameActionKind.CLEAR: {
      return { name: "" };
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
};

function NameProvider({ children }: Props) {
  const [state, dispatch] = useReducer(nameReducer, { name: "" });
  const value: Context = {
    name: state.name,
    dispatcher: dispatch,
  };

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
}

function useName() {
  const context = React.useContext(NameContext);
  if (context === undefined) {
    throw new Error("useName must be used within a NameProvider");
  }

  return context;
}

export { NameActionKind, NameProvider, useName };
