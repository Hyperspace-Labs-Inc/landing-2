export default defineAppConfig({
  ui: {
    primary: 'blue',
    strategy: 'override',
    textarea: {
      wrapper: 'relative',
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
      form: 'form-textarea',
      rounded: 'rounded-none',
      placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
      file: {
        base: 'file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none',
      },
      size: {
        '2xs': 'text-xs',
        xs: 'text-xs',
        sm: 'text-base',
        md: 'text-sm',
        lg: 'text-sm',
        xl: 'text-base',
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5',
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-0 py-4',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-2.5',
        xl: 'px-3.5 py-2.5',
      },
      leading: {
        padding: {
          '2xs': 'ps-7',
          xs: 'ps-8',
          sm: 'ps-9',
          md: 'ps-10',
          lg: 'ps-11',
          xl: 'ps-12',
        },
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          xs: 'pe-8',
          sm: 'pe-9',
          md: 'pe-10',
          lg: 'pe-11',
          xl: 'pe-12',
        },
      },
      color: {
        white: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline:
            'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
      variant: {
        outline:
          'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'focus-visible:ring-0 transition-all ring-0 outline-0 bg-transparent placeholder:text-black-400 text-white shadow-[inset_0_-1px_0_0_#fff] focus:shadow-[inset_0_-2px_0_0_#fff] focus:ring-0 border-0 focus:border-0',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        color: 'text-{color}-500 dark:text-{color}-400',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          xs: 'h-4 w-4',
          sm: 'h-5 w-5',
          md: 'h-5 w-5',
          lg: 'h-5 w-5',
          xl: 'h-6 w-6',
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5',
          },
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5',
          },
        },
      },
      default: {
        size: 'sm',
        color: 'white',
        variant: 'none',
      },
    },
    input: {
      wrapper: 'relative',
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
      form: 'form-input',
      rounded: 'rounded-none',
      placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
      file: {
        base: 'file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none',
      },
      size: {
        '2xs': 'text-xs',
        xs: 'text-xs',
        sm: 'text-base',
        md: 'text-sm',
        lg: 'text-sm',
        xl: 'text-base',
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5',
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-0 py-4',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-2.5',
        xl: 'px-3.5 py-2.5',
      },
      leading: {
        padding: {
          '2xs': 'ps-7',
          xs: 'ps-8',
          sm: 'ps-9',
          md: 'ps-10',
          lg: 'ps-11',
          xl: 'ps-12',
        },
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          xs: 'pe-8',
          sm: 'pe-9',
          md: 'pe-10',
          lg: 'pe-11',
          xl: 'pe-12',
        },
      },
      color: {
        white: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-0 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline:
            'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-0 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
        black: {
          none:
            'shadow-none bg-black text-white ring-0 ring-inset text-[17px] font-semibold',
          outline:
            'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-0 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
      variant: {
        outline:
          'shadow-sm bg-transparent text-black placeholder:text-black-500 border-b border-blue/40',
        none: 'focus-visible:ring-0 transition-all ring-0 outline-0 bg-transparent placeholder:text-black-500 text-black focus:ring-0 border-0 shadow-[inset_0_-1px_0_0_rgba(6,133,248,0.40)] focus:shadow-[inset_0_-2px_0_0_rgba(6,133,248,0.40)] focus:border-0',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        color: 'text-{color}-500 dark:text-{color}-400',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          xs: 'h-4 w-4',
          sm: 'h-5 w-5',
          md: 'h-5 w-5',
          lg: 'h-5 w-5',
          xl: 'h-6 w-6',
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5',
          },
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5',
          },
        },
      },
      default: {
        size: 'sm',
        color: 'white',
        variant: 'none',
        loadingIcon: 'i-heroicons-arrow-path-20-solid',
      },
    },
    button: {
      base: 'transition-[background-color] duration-300 flex-shrink-0',
      font: 'font-normal',
      rounded: 'rounded-md',
      truncate: 'text-left break-all line-clamp-1',
      block: 'w-full flex justify-center items-center',
      inline: 'inline-flex items-center',
      size: {
        '2xs': 'text-xs',
        xs: 'text-xs',
        sm: 'h-12 rounded-lg text-base',
        md: 'text-sm',
        lg: 'h-14 font-bold rounded-lg text-base lg:text-lg',
        xl: 'text-base',
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5',
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-4 py-0',
        md: 'px-3 py-2',
        lg: 'px-16 py-0',
        xl: 'px-3.5 py-2.5',
      },
      square: {
        '2xs': 'p-1',
        xs: 'p-1.5',
        sm: 'p-1.5',
        md: 'p-2',
        lg: 'p-2.5',
        xl: 'p-2.5',
      },
      color: {
        primary: {
          solid: 'text-white bg-blue hover:bg-blue-100',
          ghost:
            'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
        white: {
          solid:
            'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          ghost:
            'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
        gray: {
          solid:
            'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          ghost:
            'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          link: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
        black: {
          solid:
            'shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          link: 'text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
      },
      variant: {
        solid: 'shadow-none text-white dark:text-white',
        outline:
          'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        ghost:
          'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      },
      icon: {
        base: 'flex-shrink-0',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          xs: 'h-4 w-4',
          sm: 'h-5 w-5',
          md: 'h-5 w-5',
          lg: 'h-5 w-5',
          xl: 'h-6 w-6',
        },
      },
      default: {
        size: 'sm',
        variant: 'solid',
        color: 'primary',
        loadingIcon: 'i-heroicons-arrow-path-20-solid',
      },
    },
    select: {
      wrapper: 'relative',
      base: 'cursor-pointer relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
      form: 'form-select',
      rounded: 'rounded-none',
      placeholder: 'text-gray-400 dark:text-gray-500',
      file: {
        base: 'file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none',
      },
      size: {
        '2xs': 'text-xs',
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-sm',
        xl: 'text-lg',
      },
      gap: {
        '2xs': 'gap-x-1',
        xs: 'gap-x-1.5',
        sm: 'gap-x-1.5',
        md: 'gap-x-2',
        lg: 'gap-x-2.5',
        xl: 'gap-x-2.5',
      },
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-2.5',
        xl: 'px-0 py-2',
      },
      leading: {
        padding: {
          '2xs': 'ps-7',
          xs: 'ps-8',
          sm: 'ps-9',
          md: 'ps-10',
          lg: 'ps-11',
          xl: 'ps-12',
        },
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          xs: 'pe-8',
          sm: 'pe-9',
          md: 'pe-10',
          lg: 'pe-11',
          xl: 'pe-12',
        },
      },
      color: {
        white: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
        gray: {
          outline:
            'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
        },
      },
      variant: {
        outline:
          'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none border-b-2 border-black-200',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        color: 'text-{color}-500 dark:text-{color}-400',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          xs: 'h-4 w-4',
          sm: 'h-5 w-5',
          md: 'h-5 w-5',
          lg: 'h-5 w-5',
          xl: 'h-6 w-6',
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-3.5',
          },
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'px-2',
            xs: 'px-2.5',
            sm: 'px-2.5',
            md: 'px-3',
            lg: 'px-3.5',
            xl: 'px-0',
          },
        },
      },
      default: {
        size: 'sm',
        color: 'white',
        variant: 'outline',
        loadingIcon: 'i-heroicons-arrow-path-20-solid',
        trailingIcon: 'i-heroicons-chevron-down-20-solid',
      },
    },
    checkbox: {
      wrapper: 'relative flex items-center',
      container: 'flex items-center h-5',
      base: 'cursor-pointer h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
      form: 'form-checkbox',
      rounded: 'rounded',
      color: 'text-{color}-500 dark:text-{color}-400',
      background: 'bg-white dark:bg-gray-900',
      border: 'border border-gray-300 dark:border-gray-700',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      inner: 'ms-[6px] flex flex-col',
      label: 'text-lg font-medium text-gray-700 dark:text-gray-200',
      required: 'text-sm text-red-500 dark:text-red-400',
      help: 'text-sm text-gray-500 dark:text-gray-400',
      default: {
        color: 'primary',
      },
    },
  },
})
