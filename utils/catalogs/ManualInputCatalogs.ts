import type { IFilterControl } from "@/utils/types/IFilterControl"

export const controls: IFilterControl[] = [
  { 
    id: 'clientId',
    value: '',
    type: 'select',
    label: 'Client',
    placeholder: 'Select an option',
    size: 5,
  },
  { 
    id: 'type',
    value: '',
    label: 'Questionnaire',
    type: 'select',
    placeholder: 'Select an option',
    size: 4 
  },
  { 
    id: 'year',
    value: '',
    label: 'Tax Year',
    type: 'select',
    placeholder: 'Select an option',
    size: 3
  },
]

export const alignableControlTypes = ['button']

export const fieldTypesCatalog = {
  'string': 'text',
  'number': 'number',
  'select': 'select'
}
