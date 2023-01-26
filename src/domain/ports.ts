import { Todo } from './entities';

export type TodosRepository = {
  fetchTodos: () => Promise<Todo[]>;
}
