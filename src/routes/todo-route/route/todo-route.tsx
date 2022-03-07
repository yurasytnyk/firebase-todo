import { FC } from 'react';
import { 
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { RouteGuard } from '../../../hok/route-guard/hok';
import { Todo } from '../../../components/todo/component';
import { TodoTasks } from '../../../components/todo-tasks/component';

export const TodoRoute: FC = () => {
  return (
    <RouteGuard>
      <Routes>
        <Route path="/" element={<Todo />}>
          <Route path=":id" element={<TodoTasks />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </RouteGuard>
  );
};
