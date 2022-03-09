import { useParams } from 'react-router-dom';

import { IListData } from '../../components/todo-tasks/types/todo-tasks-types';
import { useAppSelector } from '../../store/hooks/use-app-selector/use-app-selector';

export const useTasksData = () => {
  const filteredLists = useAppSelector((state) => state.lists.filteredData);
  const colors = useAppSelector((state) => state.colors.data);

  const { id } = useParams();

  const tasksData = filteredLists.reduce<Record<string, IListData>>((acc, curr) => {
    if (id === curr.id || id === 'all') {
      acc = {
        ...acc,
        [curr.id!]: {
          id: curr.id!,
          title: curr.name,
          tasks: curr.tasks,
          color: colors.filter((color) => color.id === curr.colorId)[0].hex,
        },
      };
    }

    return acc;
  }, {});

  return {
    tasksData,
  };
};
