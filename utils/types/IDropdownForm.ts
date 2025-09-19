export interface IDropdownForm{
  title: string;
  id?: string;
  fields: IDropdownFormField[];
}

export interface IDropdownFormField{
  id: string;
  label: string;
  description: string;
  options: string[];
  value: any;
  type: IDropdownFormFieldType;
}

export type IDropdownFormFieldType = 'text' | 'radio' | 'number' | 'select'