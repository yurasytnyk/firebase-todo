import { ChangeEvent } from 'react';

export interface Props {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
