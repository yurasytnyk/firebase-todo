import { FC } from 'react';
import { FormIcon } from '../../form-icon/component';

import { Props } from '../types/form-header-types';

export const FormHeader: FC<Props> = (props) => {
  const {
    title, 
    icon, 
  } = props;

  return (
    <>
      <FormIcon icon={icon} />

      <h2>{title}</h2>
    </>
  );
};
