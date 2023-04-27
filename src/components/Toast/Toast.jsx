import { useToastStore } from './store/useToastStore'
import './toast.css'

const Toast = ({ componentsId }) => {
  const toastCatalogo = useToastStore(state => state.toastCatalogo)

  return (
    <>
      {toastCatalogo.map(toast => (
        <section key={toast.id} className={toast.classname}>
          {componentsId.find(render => render.componentId === toast.componentId)?.component}
        </section>
      ))}
    </>
  )
}

export default Toast
