import { Breakpoints } from '../../other/constants';

export type ContainerType = '' | Breakpoints | 'fluid';

export type ContainerClass =
  'container'
  | 'container-sm'
  | 'container-md'
  | 'container-lg'
  | 'container-xl'
  | 'container-xxl'
  | 'container-fluid';

export const containerTypeToClassMap = (type: ContainerType): ContainerClass => ((): Record<ContainerType, ContainerClass> => ({
  "": 'container',
  sm: 'container-sm',
  md: 'container-md',
  lg: 'container-lg',
  xl: 'container-xl',
  xxl: 'container-xxl',
  fluid: 'container-fluid'
}))[type];
