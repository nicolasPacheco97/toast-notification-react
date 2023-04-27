import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Toast from './components/Toast/Toast'
import { toastId } from './constants/constants'
import { useToastStore } from './components/Toast/store/useToastStore'

function App () {
  const addItemCatalogo = useToastStore(state => state.addItemCatalogo)
  const toastCatalogo = useToastStore(state => state.toastCatalogo)

  console.log(toastCatalogo)
  useEffect(() => {
    addItemCatalogo('prueba2')
  }, [addItemCatalogo])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => addItemCatalogo('prueba1')}>
          count is
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>

      <Toast componentsId={toastId} />
    </>
  )
}

export default App
