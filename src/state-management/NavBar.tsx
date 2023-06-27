import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
 
/* OLD CODE with context

import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/taskContext";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

*/
