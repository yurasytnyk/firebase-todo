import { 
  useContext, 
  useEffect, 
} from 'react';
import { onSnapshot } from 'firebase/firestore';

import { AddPopupContext } from '../../contexts/add-popup-context/context/add-popup-context';
import { colorsRoutine } from '../../store/features/todo-sidebar/routines/colors-routine';
import { listRoutine } from '../../store/features/todo-sidebar/routines/tasks-list-routine';
import { useAppSelector } from '../../store/hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../store/hooks/use-dispatch/use-dispatch';
import { listsCollection } from '../../firestore/collections/lists-collection';
import { updateLists } from '../../store/features/todo-sidebar/slices/tasks-list-slice';

export const useListsUpdate = () => {
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

    const unsubscribe = onSnapshot(listsCollection(userId), (snapshot) => {
      const listsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch(updateLists(listsData));
    });

    return () => unsubscribe();
  }, []); // eslint-disable-line

  return {
    onClickHandler,
  };
};
