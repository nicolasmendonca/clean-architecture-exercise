import React from 'react'
import { TodosRepository } from '../../domain/ports'

type AppServices = {
  todosRepository: TodosRepository
}

const AppServicesContext = React.createContext<AppServices | undefined>(undefined)

export const AppServicesProvider: React.FC<{ appServices: AppServices, children: React.ReactNode }> = ({ appServices, children }) => {
  return (<AppServicesContext.Provider value={appServices}>{children}</AppServicesContext.Provider>)
}

export const useAppServices = () => {
  const appServices = React.useContext(AppServicesContext)
  if (!appServices) {
    throw new Error('useAppServices must be used within a AppServicesProvider')
  }
  return appServices
}
