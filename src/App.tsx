// import "./App.css";
// import TodoForm from "./react-query/TodoForm";
// import { TodoList } from "./react-query/TodoList";
// import Counter from "./state-management/Counter";
// import TaskList from "./state-management/TaskList";
// import LoginStatus from "./state-management/LoginStatus";
// import loginReducer from "./state-management/reducers/authReducer";
// import AuthContext from "./state-management/contexts/authContext";
// import TaskContext from "./state-management/contexts/taskContext";
// import { useReducer } from "react";
// import taskReducer from "./state-management/reducers/taskReducer";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskProvider from "./state-management/tasks/TaskProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
