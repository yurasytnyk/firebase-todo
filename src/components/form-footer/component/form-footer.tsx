import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubmitButton } from '../../submit-button/component';

import { Props } from '../types/form-footer-types';
import '../styles/form-footer-styles.scss';

export const FormFooter: FC<Props> = (props) => {
  const { 
    text,
    buttonText,
    linkText,
    url,
  } = props;

  return (
    <footer className="form__footer">
      <SubmitButton buttonText={buttonText} />
      
      <p>
        {text}

        <NavLink 
          to={url}
          className="form__footer-link"
        >
          {linkText}
        </NavLink>
      </p>
    </footer>
  );
};
