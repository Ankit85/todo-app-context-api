/* eslint-disable react/prop-types */
// import { useTodo } from "../contexts";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  //   const { todos } = useTodo();

  if (!todos) return;

  return (
    <>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div className="w-full" key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
    </>
  );
};

export default TodoList;
