import { useToastStore } from './useToastStore'

const Prueba1 = () => {
    const removeItemCatalogo = useToastStore(state => state.removeItemCatalogo)
    const handleCancelClick = () => removeItemCatalogo('prueba1')

    return (
      <section className='prueba-toast relative'>
        <p className='font-size-20 font-barlow-b'>¡Esto es una prueba épica!</p>
        <span className='close pointer' onClick={handleCancelClick}>X</span>
      </section>
    )
}

const Prueba2 = () => {
    const removeItemCatalogo = useToastStore(state => state.removeItemCatalogo)
    const handleCancelClick = () => removeItemCatalogo('prueba2')

    return (
      <section className='prueba-toast relative'>
        <p className='font-size-20 font-barlow-b'>¡Esto es una prueba no tan épica!</p>
        <span className='close pointer' onClick={handleCancelClick}>X</span>
      </section>
    )
}

export { Prueba1, Prueba2 }
