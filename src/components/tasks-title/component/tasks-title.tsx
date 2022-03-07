import { FC } from 'react';

import { Props } from '../types/tasks-title-types';
import '../styles/tasks-title-styles.scss';

export const TasksTitle: FC<Props> = (props) => {
  const { 
    title,
    color,
  } = props;

  return (
    <h2
      className="tasks__title"
      style={{ color: color }}
    >
      {title}
    </h2>
  );
};
