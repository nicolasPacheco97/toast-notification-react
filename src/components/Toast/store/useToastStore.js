import { create } from 'zustand'
import { uuid } from '../Misc/uuid'

export const useToastStore = create((set, get) => {
  return {
    toastCatalogo: [],
    addItemCatalogo: componentId => {
      const { toastCatalogo, addStyle } = get()

      if (toastCatalogo.find(item => item.componentId === componentId)) {
        return set({ toastCatalogo })
      } else {
        const itemFormat = {
          id: uuid(),
          componentId,
          classname: 'toast'
        }

        const toasts = [itemFormat, ...toastCatalogo]
        set({ toastCatalogo: toasts })
        addStyle()
      }
    },
    removeItemCatalogo: componentId => {
      const { toastCatalogo, addStyle } = get()

      const toast = toastCatalogo.filter(item => item.componentId !== componentId)
      set({ toastCatalogo: toast })
      addStyle(1)
    },
    addStyle: async (timeToWait = 500) => {
      console.log('addStyle')
      const { toastCatalogo } = get()
      setTimeout(() => {
        const catalogo = toastCatalogo.map((item, index) => {
          if (index > 3) item.classname = 'toast toast_disabled'
          else item.classname = `toast toast-view-${index}`

          return item
        })

        set({ toastCatalogo: catalogo })
      }, timeToWait)
    }
  }
})
