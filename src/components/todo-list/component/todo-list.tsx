import { FC } from 'react';

import { Props } from '../types/todo-list-types';
import { TodoListItem } from '../../todo-list-item/component';
import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import '../styles/todo-list-styles.scss';

export const TodoList: FC<Props> = (props) => {
  const { filteredData } = props;
  
  const colors = useAppSelector((state) => state.colors.data);

  const tasksListData = filteredData.map((list) => ({
    ...list,
    color: colors.find((color) => color.id === list.colorId),
  }));

  return (
    <ul className="todo__list">
      {tasksListData.map((item, indx) => (
        <TodoListItem
          key={indx}
          id={item.id!}
          color={item.color!}
          label={item.name}
          active={item.active}
          tasks={item.tasks}
        />
      ))}
    </ul>
  );
};
