export interface IFilterControl{
  id: string;
  value: any;
  type: IFilterControlTypeItem;
  size: number | IFilterControlSizeItem;
  options?: IFilterControlOption[];
  placeholder?: string;
  label?: string;
  icon?: string;
  align?: string;
  variant? : "text" | "flat" | "elevated" | "tonal" | "outlined" | "plain" | undefined;
  offset?: number | 'auto';
}

export type IFilterControlTypeItem = 'select' | 'button'

export type IFilterControlSizeItem = 'fit-content' | 'max-content' | 'min-content'

export interface IFilterControlOption{
  value: string;
  label: string;
  disabled?: boolean;
}

export interface IFilterControlOptions{
  [key: string]: IFilterControlOption[];
}

