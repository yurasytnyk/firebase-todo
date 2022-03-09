import { FC } from 'react';

import AddTaskIconSvg from '../../../assets/img/add.svg';
import { TodoList } from '../../todo-list/component';
import { AddTaskButton } from '../../add-task-button/component';
import { AddPopup } from '../../add-popup/component';
import { AllLists } from '../../all-lists/component';
import { useListsUpdate } from '../../../hooks/use-lists-update';
import { SearchBar } from '../../search-bar/component';
import { useListsSearch } from '../../../hooks/use-lists-search';
import '../styles/todo-sidebar-styles.scss';

export const TodoSidebar: FC = () => {
  const { onClickHandler } = useListsUpdate();
  const {
    filteredData,
    onChangeHandler,
  } = useListsSearch();

  return (
    <div className="todo__sidebar">
      <SearchBar onChangeHandler={onChangeHandler} />
      
      <AllLists text="All Tasks" />
      
      <TodoList filteredData={filteredData} />

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
