import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

export interface LoginAction {
  type: "LOGIN";
  username: string;
}

export interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const loginReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, authDispatch] = useReducer(loginReducer, "");
  return (
    <AuthContext.Provider value={{ user, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
