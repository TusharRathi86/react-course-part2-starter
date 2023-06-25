import useTodos from "./hooks/useTodos";

export const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>LOADING.....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {" "}
          {todo.title}{" "}
        </li>
      ))}
    </ul>
  );
};
