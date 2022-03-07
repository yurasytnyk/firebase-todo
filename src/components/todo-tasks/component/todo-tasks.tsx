import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import { TasksItems } from '../../tasks-items/component';
import { AddTaskForm } from '../../add-task-form/component';
import { IListData } from '../types/todo-tasks-types';
import { TasksTitle } from '../../tasks-title/component';
import '../styles/todo-tasks-styles.scss';

export const TodoTasks: FC = () => {
  const lists = useAppSelector((state) => state.lists.data);
  const colors = useAppSelector((state) => state.colors.data);
  
  const { id } = useParams();

  const tasksData = lists.reduce<Record<string, IListData>>((acc, curr) => {
    if (id === curr.id || id === 'all') {
      acc = {
        ...acc,
        [curr.id!]: {
          id: curr.id!,
          title: curr.name,
          tasks: curr.tasks,
          color: colors.filter((color) => color.id === curr.colorId)[0].hex,
        }
      };
    }

    return acc;
  }, {});

  return (
    <div className="todo__tasks">

      {Object.values(tasksData).map((item, indx) => (
        <div 
          key={indx}
          className="todo__tasks-block"
        >
          <TasksTitle 
            title={item.title}
            color={item.color}
          />
          
          <TasksItems
            id={item.id}
            tasksData={item.tasks} 
          />

          <AddTaskForm id={item.id} />
        </div>
      ))}

    </div>
  );
};
