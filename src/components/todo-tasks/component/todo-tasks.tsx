import { FC } from 'react';

import { TasksItems } from '../../tasks-items/component';
import { AddTaskForm } from '../../add-task-form/component';
import { TasksTitle } from '../../tasks-title/component';
import { useTasksData } from '../../../hooks/use-tasks-data';
import '../styles/todo-tasks-styles.scss';

export const TodoTasks: FC = () => {
  const { tasksData } = useTasksData();

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
