import { useContext } from "react";
import AuthContext from "./authContext";

const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
  const { user, authDispatch: dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Tushar Rathi" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
