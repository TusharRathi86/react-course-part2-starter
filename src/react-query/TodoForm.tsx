import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger"> {addTodo.error.message} </div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addTodo.isLoading} className="btn btn-primary">
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;

/* 

// console.log(savedTodo);
// APPROACH 1: Invalidating the cache.
// queryClient.invalidateQueries({
//   queryKey: ["todos"],
// }); dosen't work with jsonplaceholder
// APPROACH 2: Updating the data in the cache drectly.

-> Variables in react query  refers to the input, the data the we sent to the backend.
-> Context is an object that we create that we use to pass data in between our callbacks.
-> Updating the query cache.
-> Undefined objects are not spreadable.

*/
