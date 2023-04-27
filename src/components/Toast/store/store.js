import { useToastStore } from './useToastStore'

export const Store = () => {
  const addItemCatalogo = useToastStore(state => state.addItemCatalogo)
  const removeItemCatalogo = useToastStore(state => state.removeItemCatalogo)

  const addToastItem = addItemCatalogo
  const removeToastItem = removeItemCatalogo

  return { addToastItem, removeToastItem }
}
