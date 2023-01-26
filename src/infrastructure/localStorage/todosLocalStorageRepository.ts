import { TodosRepository } from '../../domain/ports';

export const todosLocalStorageRepository: TodosRepository = {
  fetchTodos: () => new Promise((res, rej) => {
    localStorage.hasItem('todos') ? JSON.parse(localStorage.getItem('todos') ?? '') : []
  })
}
