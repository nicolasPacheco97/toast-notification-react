import { useToastStore } from './useToastStore'

const useToast = () => {
  const addItemCatalogo = useToastStore(state => state.addItemCatalogo)
  const removeItemCatalogo = useToastStore(state => state.removeItemCatalogo)

  const addToastItem = addItemCatalogo
  const removeToastItem = removeItemCatalogo

  return { addToastItem, removeToastItem }
}

export { useToast }
