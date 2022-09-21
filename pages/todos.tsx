import { Layout } from "@/layout";
import { addTodo, removeTodo, todos, toggleTodo } from "@/store/todos";
import { NextPageWithLayout } from "@/types/next";
import {
  Checkbox,
  CloseButton,
  Heading,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSnapshot } from "valtio";

const Todos: NextPageWithLayout = () => {
  const todosSnap = useSnapshot(todos);

  return (
    <>
      <Stack spacing={8}>
        <Heading>Todos</Heading>
        <Stack spacing={3}>
          {todosSnap.map((todo) => (
            <HStack
              key={todo.id}
              bg="gray.700"
              rounded="md"
              px={4}
              py={2}
              justify="space-between"
            >
              <Checkbox
                size="lg"
                isChecked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                fontWeight="semibold"
              >
                {todo.title}
              </Checkbox>

              <CloseButton onClick={() => removeTodo(todo.id)} />
            </HStack>
          ))}
          <Input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const text = e.currentTarget.value;
                addTodo(text);
                e.currentTarget.value = "";
              }
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

Todos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Todos;
