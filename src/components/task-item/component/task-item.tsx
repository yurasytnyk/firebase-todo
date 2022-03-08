import { 
  FC, 
  SyntheticEvent, 
} from 'react';
import { 
  doc, 
  updateDoc, 
} from 'firebase/firestore';

import { Props } from '../types/task-item-types';
import { useAppDispatch } from '../../../store/hooks/use-dispatch/use-dispatch';
import { deleteTaskRoutine } from '../../../store/features/tasks-items/routines/tasks-items-routine';
import { ITasks } from '../../../firestore/types/lists-collection-types';
import { FirebaseClient } from '../../../firestore/firebase-client/firebase-client';
import { RemoveListIcon } from '../../remove-list-icon/component';
import CheckIconSvg from '../../../assets/img/check.svg';
import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';

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
    if ((e.target as HTMLLabelElement).closest('label')) {
      const updatedTask = {
        ...item,
        completed: !item.completed,
      };

      const updatedTasks = tasksData.map((task) => {
        return task.id !== updatedTask.id ? task : updatedTask;
      });

      await updateDoc(doc(FirebaseClient.db, `users/${userId}/lists/${id}`), {
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

      <label
        htmlFor={`task-checkbox-${item.id}`}
        className={`tasks__items-label ${item.completed ? 'completed' : ''}`}
      >
        <img
          className="tasks__items-check"
          src={CheckIconSvg}
          alt="check icon"
        />

        {item.title}
      </label>

      <RemoveListIcon
        listId={`${id}`} 
        taskId={item}
        onClickHandler={onClickHandler}
      />
    </li>
  );
};
