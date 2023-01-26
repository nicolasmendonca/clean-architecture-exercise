import { Todo } from './entities';
import type { TodosRepository } from './ports';


export function fetchTodos(todosRepository: TodosRepository) {
  return todosRepository.fetchTodos();
}
