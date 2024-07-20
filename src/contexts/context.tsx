// context.tsx
import React, {
  Dispatch,
  ReactNode,
  useState,
  SetStateAction,
  useReducer,
} from "react";

export interface AppContextProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  state: State;
  dispatch: Dispatch<Action>;
}

export const AppContext = React.createContext<AppContextProps | undefined>(
  undefined
);

interface AppProviderProps {
  children: ReactNode;
}

interface State {
  eventName: string;
  eventDescription: string;
  eventDate: string | number | readonly string[] | undefined;
  eventLocation: string;
  error: string | null;
}

interface Action {
  type:
    | "addEventName"
    | "addEventDescription"
    | "addEventDate"
    | "addEventLocation"
    | "addError"
    | "clearError"
    | "clearFields";
  payload: string | number | readonly string[] | undefined;
}

const reducerFunc = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case "addEventName":
      return {
        ...state,
        eventName: typeof payload === "string" && payload ? payload : "",
        error:
          typeof payload === "string" && payload
            ? ""
            : "Event name has to be given",
      };
    case "addEventDescription":
      return {
        ...state,
        eventDescription: typeof payload === "string" && payload ? payload : "",
        error:
          typeof payload === "string" && payload
            ? ""
            : "Event has to be described",
      };
    case "addEventDate":
      return {
        ...state,
        eventDate: payload,
        error: payload ? "" : "Event date has to be specified",
      };
    case "addEventLocation":
      return {
        ...state,
        eventLocation: typeof payload === "string" && payload ? payload : "",
        error:
          typeof payload === "string" && payload
            ? ""
            : "Event location has to be provided",
      };
    case "addError":
      return {
        ...state,
        error: typeof payload === "string" ? payload : null,
      };
    case "clearError":
      return {
        ...state,
        error: null,
      };
      case "clearFields":
      return {
        ...state,
        eventName: "",
        eventDescription: "",
        eventDate: "",
        eventLocation: "",
        error: null,
      };
    default:
      return state;
  }
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventLocation: "",
    error: null,
  });
  const [modal, setModal] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ modal, setModal, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
