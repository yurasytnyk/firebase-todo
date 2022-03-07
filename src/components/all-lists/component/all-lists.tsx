import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Props } from '../types/all-lists-types';
import AllListsIconSvg from '../../../assets/img/list.svg';
import { AllListsIcon } from '../../all-lists-icon/component';
import '../styles/all-lists-styles.scss';

export const AllLists: FC<Props> = (props) => {
  const { text } = props;

  return (
    <div className="todo__list-wrap">
      <NavLink 
        className="todo__list-link"
        to="/protected/all"
      >
        <AllListsIcon icon={`${AllListsIconSvg}`} />

        {text}
      </NavLink>
    </div>
  );
};
