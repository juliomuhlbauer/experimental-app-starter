import { proxy } from "valtio";

interface TodoProps {
  id: string;
  title: string;
  done: boolean;
}

export const todos: TodoProps[] = proxy([
  {
    id: "1",
    title: "Learn Valtio",
    done: false,
  },
]);

const addTodo = (title: string) => {
  const id = Math.random().toString(36).substring(2);

  todos.push({ id, title, done: false });
};

const removeTodo = (id: string) => {
  todos.splice(
    todos.findIndex((todo) => todo.id === id),
    1
  );
};

const toggleTodo = (id: string) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
};

export { addTodo, removeTodo, toggleTodo };
