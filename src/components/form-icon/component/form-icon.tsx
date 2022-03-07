import { FC } from 'react';

import { Props } from '../types/form-icon-types';
import '../styles/form-icon-styles.scss';

export const FormIcon: FC<Props> = (props) => {
  const { icon } = props;

  return (
    <img 
      className="login__form-icon"
      src={icon} 
      alt="form icon" 
    />
  );
};
