import { 
  ChangeEvent, 
  useEffect, 
  useState,
} from 'react';

import { setFilteredLists } from '../../store/features/todo-sidebar/slices/tasks-list-slice';
import { useAppSelector } from '../../store/hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../store/hooks/use-dispatch/use-dispatch';

export const useListsSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const lists = useAppSelector((state) => state.lists.data);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const filteredData = lists.filter((list) =>
    list.name.toLowerCase().includes(searchValue)
  );

  useEffect(() => {
    dispatch(setFilteredLists(filteredData));
  }, [filteredData]); // eslint-disable-line

  return {
    filteredData,
    onChangeHandler,
  }
};
