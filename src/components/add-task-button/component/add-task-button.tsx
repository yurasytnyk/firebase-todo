import { FC } from 'react';
import clsx from 'clsx';

import { Props } from '../types/add-task-button-types';
import '../styles/add-task-button-styles.scss';

export const AddTaskButton: FC<Props> = (props) => {
  const {
    icon, 
    text,
    asideSide,
    isVisible,
    onClickHandler,
  } = props;

  const classes = clsx(
    'add-task__button',
    asideSide && 'add-task__button--aside',
    isVisible && 'visible',
  );

  return (
    <button
      className={classes}
      onClick={onClickHandler}
    >
      <i>
        <img
          className="add-task__icon" 
          src={icon} alt="add new task icon" 
        />
      </i>

      <span className="add-task__text">
        {text}
      </span>
    </button>
  );
};
