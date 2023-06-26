import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";

export interface Task {
  id: number;
  title: string;
}

interface AddAction {
  type: "ADD";
  task: Task;
}

interface DeleteAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddAction | DeleteAction;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];

    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
