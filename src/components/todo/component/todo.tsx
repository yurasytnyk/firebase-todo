import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { LogoutIcon } from '../../logout-icon/component';

import { TodoSidebar } from '../../todo-sidebar/component';
import LogoutIconSvg from '../../../assets/img/logout.svg';
import '../styles/todo-styles.scss';

export const Todo: FC = () => {
  return (
    <div className="todo">
      <TodoSidebar />

      <LogoutIcon icon={LogoutIconSvg} />

      <Outlet />
    </div>
  );
};
