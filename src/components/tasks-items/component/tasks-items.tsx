import { FC } from 'react';

import { Props } from '../types/tasks-items-types';
import { TaskItem } from '../../task-item/component';
import '../styles/tasks-items-styles.scss';

export const TasksItems: FC<Props> = (props) => {
  const { 
    id,
    tasksData, 
  } = props;

  if (!tasksData.length) {
    return (
      <h2 className="tasks__items-empty">
        Tasks list empty...
      </h2>
    );
  }
  
  return (
    <ul className="tasks__items">
      {tasksData.map((item, indx) => (
        <TaskItem
          key={indx}
          id={id}
          item={item}
          tasksData={tasksData}
        />
      ))}
    </ul>
  );
};
