import { defu } from 'defu'
import type { ModuleOptions } from '../module'
import select from './select'

export default (options: Required<ModuleOptions>) => {
  return defu({
    slots: {
      value: 'truncate',
      placeholder: 'truncate text-current/50',
      input: 'placeholder-gray-400 dark:placeholder-gray-500 border-0 border-b border-gray-200 dark:border-gray-800 focus:outline-none'
    },
    variants: {
      size: {
        xs: {
          input: 'text-xs px-2 py-1'
        },
        sm: {
          input: 'text-xs px-2.5 py-1.5'
        },
        md: {
          input: 'text-sm px-2.5 py-1.5'
        },
        lg: {
          input: 'text-sm px-3 py-2'
        },
        xl: {
          input: 'text-base px-3 py-2'
        }
      }
    }
  }, select(options))
}
