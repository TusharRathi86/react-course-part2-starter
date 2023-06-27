import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <TaskProvider>
        <NavBar />
        <Counter />
        <HomePage />
      </TaskProvider>
    </>
  );
}

export default App;

/* OLD CODE with AuthProvider

import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <Counter />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

*/
