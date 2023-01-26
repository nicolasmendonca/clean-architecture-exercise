import React from 'react'
import { vi, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'
import { AppServicesProvider } from './useAppServices'

const fetchTodos = vi.fn().mockResolvedValue([])

const MockedWrapper: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <AppServicesProvider appServices={{
    todosRepository: {
      fetchTodos
    }
  }}>
    {children}
  </AppServicesProvider>
}

it('calls the service to fetch todos', async () => {
  expect.assertions(1);
  render(<App />, {
    wrapper: MockedWrapper
  })

  expect(fetchTodos).toHaveBeenCalled()
})
