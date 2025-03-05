export const useToasts = () => {
  const toast = useToast()

  const errorToast = (err: any) => {
    toast.add({
      id: 'error-toast',
      timeout: 2000,
      closeButton: {
        class: 'text-white',
        color: 'white',
      },
      title:
        err?.response?.data?.message ||
        err?.data?.message ||
        err?._data?.message ||
        (typeof err?.message === 'string' && err?.message) ||
        (typeof err === 'string' && err) ||
        '',
      ui: {
        padding: 'p-4 flex-row-reverse',
        gap: 'gap-2',
        ring: '',
        title: 'text-white text-[15px] font-medium tracking-[-0.15px]',
        icon: {
          color: 'text-white dark:text-white',
        },
        background: 'bg-red dark:bg-red border-0',
      },
      click: () => toast.remove('error-toast'),
    })
  }

  const successToast = (title: string, clickFunc?: void) => {
    toast.add({
      id: 'success-toast',
      timeout: 4000,
      closeButton: {
        class: 'text-white',
        color: 'white',
      },
      title,
      ui: {
        padding: 'p-4 flex-row-reverse',
        gap: 'gap-2',
        ring: '',
        title: 'text-white text-[15px] font-medium tracking-[-0.15px]',
        icon: {
          color: 'text-white dark:text-white',
        },
        background: 'bg-black-500 dark:bg-black-500 border-0',
      },
      click: () => clickFunc?.() || toast.remove('success-toast'),
    })
  }

  return {
    successToast,
    errorToast,
  }
}
