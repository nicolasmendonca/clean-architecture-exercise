import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAppServices } from './useAppServices';
import { fetchTodos } from '../../domain/useCases';



function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = React.useState(true)
  const  appServices = useAppServices()

  React.useEffect(()=> {
      fetchTodos(appServices.todosRepository).then(json => {
        console.log(json)
        setLoading(false)
      })
  }, [fetchTodos])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{loading ? 'loading' : ''}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
