import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/** providing store to entire app with react-redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
