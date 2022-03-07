import { FC } from 'react';

import { Props } from '../types/cancel-button-types';
import '../styles/cancel-button-styles.scss';

export const CancelButton: FC<Props> = (props) => {
  const { 
    text,
    onClickHandler,
  } = props;

  return (
    <button 
      className="cancel-button"
      type="button"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
