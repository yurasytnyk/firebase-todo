import { FC } from 'react';

import { Props } from '../types/all-lists-icon-types';
import '../styles/all-lists-icon-styles.scss';

export const AllListsIcon: FC<Props> = (props) => {
  const { icon } = props;

  return (
    <div>
      <img 
        className="all-lists__icon"
        src={icon} 
        alt="All lists icon" 
      />
    </div>
  );
};
