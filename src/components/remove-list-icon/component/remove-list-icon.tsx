import { FC } from 'react';

import { Props } from '../types/remove-list-icon-types';
import RemoveIconSvg from '../../../assets/img/remove.svg';
import '../styles/remove-list-icon-styles.scss';

export const RemoveListIcon: FC<Props> = (props) => {
  const { 
    listId,
    taskId,
    onClickHandler,
  } = props;

  const removeItem = () => onClickHandler(listId, taskId);
  
  return (
    <img
      className="remove-icon"
      src={RemoveIconSvg} 
      alt="remove task icon"
      onClick={removeItem} 
    />
  );
};
