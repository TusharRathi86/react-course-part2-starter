import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Tushar Rathi")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;

/* OLD CODE with CUSTOM AUTH HOOK

import useAuth from "./useAuth";

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

*/
