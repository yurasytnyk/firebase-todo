import { FC } from 'react';
import clsx from 'clsx';

import { Props } from '../types/task-label-types';
import CheckIconSvg from '../../../assets/img/check.svg';

export const TaskLabel: FC<Props> = (props) => {
  const { 
    id,
    completed,
    title,
  } = props;
  const classes = clsx(
    'tasks__items-label',
    completed && 'completed',
  );
  
  return (
    <label
      htmlFor={`task-checkbox-${id}`}
      className={classes}
    >
      <img
        className="tasks__items-check"
        src={CheckIconSvg}
        alt="check icon"
      />

      {title}
    </label>
  );
};
