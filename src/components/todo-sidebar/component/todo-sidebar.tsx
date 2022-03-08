import { 
  FC, 
  useContext, 
  useEffect,
} from 'react';
import { onSnapshot } from 'firebase/firestore';

import AddTaskIconSvg from '../../../assets/img/add.svg';
import { TodoList } from '../../todo-list/component';
import { AddTaskButton } from '../../add-task-button/component';
import { AddPopup } from '../../add-popup/component';
import { useAppDispatch } from '../../../store/hooks/use-dispatch/use-dispatch';
import { colorsRoutine } from '../../../store/features/todo-sidebar/routines/colors-routine';
import { listRoutine } from '../../../store/features/todo-sidebar/routines/tasks-list-routine';
import { updateLists } from '../../../store/features/todo-sidebar/slices/tasks-list-slice';
import { AddPopupContext } from '../../../contexts/add-popup-context/context/add-popup-context';
import { AllLists } from '../../all-lists/component';
import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import { FirebaseClient } from '../../../firestore/firebase-client/firebase-client';
import { IListsCollection } from '../../../firestore/types/lists-collection-types';
import '../styles/todo-sidebar-styles.scss';

export const TodoSidebar: FC = () => {
  const { 
    visible, 
    setVisible, 
  } = useContext(AddPopupContext);

  const userId = useAppSelector((state) => state.auth.isAuth.uuid);
  const dispatch = useAppDispatch();

  const onClickHandler = () => setVisible(!visible);

  useEffect(() => {
    dispatch(colorsRoutine());
    dispatch(listRoutine(userId));

    const listsCollection = FirebaseClient.createCollection<IListsCollection>(`users/${userId}/lists`);

    const unsubscribe = onSnapshot(listsCollection, (snapshot) => {
      const listsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch(updateLists(listsData));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="todo__sidebar">
      <AllLists text="All Tasks" />
      
      <TodoList />

      <AddTaskButton
        icon={AddTaskIconSvg}
        text="Add new task"
        asideSide={true}
        onClickHandler={onClickHandler}
      />

      <AddPopup />
    </div>
  );
};
