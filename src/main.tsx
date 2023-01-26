import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './application/react/App'
import { AppServicesProvider } from './application/react/useAppServices'
import './index.css'
import { todosApiRepository } from './infrastructure/api/todosApiRepository'
import { todosLocalStorageRepository } from './infrastructure/localStorage/todosLocalStorageRepository'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppServicesProvider appServices={{
      todosRepository: todosApiRepository
    }}>
    <App />
    </AppServicesProvider>
  </React.StrictMode>,
)
