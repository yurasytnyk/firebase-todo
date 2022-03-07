import { FC } from 'react';

import { Props } from '../types/submit-button-types';
import '../styles/submit-button-styles.scss';

export const SubmitButton: FC<Props> = (props) => {
  const { buttonText } = props;

  return (
    <button 
      className="submit-button"
      type="submit"
    >
      {buttonText}
    </button>
  );
};
