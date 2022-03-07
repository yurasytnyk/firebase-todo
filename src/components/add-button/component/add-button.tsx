import { FC } from 'react';
import clsx from 'clsx';

import { Props } from '../types/add-button-types';
import '../styles/add-button-styles.scss';

export const AddButton: FC<Props> = (props) => {
  const { 
    text, 
    fullWidth,
  } = props;
  const classes = clsx(
    'add-button',
    fullWidth && 'add-button--fullWidth'
  );

  return (
    <button 
      className={classes}
      type="submit"
    >
      {text}
    </button>
  );
};
