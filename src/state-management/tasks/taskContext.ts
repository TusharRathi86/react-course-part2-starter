import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TasksContextType {
  tasks: Task[];
  taskDispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TaskContext;
