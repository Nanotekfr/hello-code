import React from 'react'
import App from './App'
import { ContextProvider } from './context/Context'

function main () {
  return (
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export default main
