import { FC } from 'react';

import { Props } from '../types/todo-list-count-types';
import '../styles/todo-list-count-styles.scss';

export const TodoListCount: FC<Props> = (props) => {
  const { tasks } = props;

  return (
    <span className="todo__list-count">
      {`(${tasks.length})`}
    </span>
  );
};
