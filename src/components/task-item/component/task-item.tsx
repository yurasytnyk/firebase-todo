import { 
  FC, 
  SyntheticEvent, 
} from 'react';

import { Props } from '../types/task-item-types';
import { useAppDispatch } from '../../../store/hooks/use-dispatch/use-dispatch';
import { deleteTaskRoutine } from '../../../store/features/tasks-items/routines/tasks-items-routine';
import { ITasks } from '../../../firestore/types/lists-collection-types';
import { FirebaseClient } from '../../../firestore/firebase-client/firebase-client';
import { RemoveListIcon } from '../../remove-list-icon/component';
import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import { TaskLabel } from '../../task-label/component/task-label';

export const TaskItem: FC<Props> = (props) => {
  const {
    id,
    item,
    tasksData,
  } = props;

  const userId = useAppSelector((state) => state.auth.isAuth.uuid);
  const dispatch = useAppDispatch();

  const onClickHandler = (list: string, task?: ITasks) => {
    dispatch(deleteTaskRoutine({ userId, list, task }));
  };

  const onCompleteStatusHandler = (item: ITasks) => async (e: SyntheticEvent) => {
    const parent = (e.target as HTMLLabelElement).closest('label');
    
    if (parent) {
      const updatedTask = {
        ...item,
        completed: !item.completed,
      };

      const updatedTasks = tasksData.map((task) => {
        return task.id !== updatedTask.id ? task : updatedTask;
      });

      await FirebaseClient.updateDocument(`users/${userId}/lists/${id}`, {
        tasks: updatedTasks,
      });
    }
  };

  return (
    <li
      className="tasks__items-row" 
      key={item.id}
      onClick={onCompleteStatusHandler(item)}
    >
      <input
        type="checkbox"
        id={`task-checkbox-${item.id}`}
        className="tasks__items-checkbox"
      />

      <TaskLabel 
        id={item.id}
        completed={item.completed}
        title={item.title}
      />

      <RemoveListIcon
        listId={`${id}`} 
        taskId={item}
        onClickHandler={onClickHandler}
      />
    </li>
  );
};
