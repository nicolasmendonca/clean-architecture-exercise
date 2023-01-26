import { TodosRepository } from '../../domain/ports';

export const todosApiRepository: TodosRepository = {
  fetchTodos: () => fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
}
