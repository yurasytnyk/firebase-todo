import { FC } from 'react';

import { Props } from '../types/list-item-label-types';

export const ListItemLabel: FC<Props> = (props) => {
  const { label } = props;
  
  return (
    <span>{label}</span>
  );
};
