import { FC } from 'react';
import { 
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { TodoRoute } from './routes/todo-route/route';
import { LoginPage } from './pages/login-page/module';
import { RegistrationPage } from './pages/registration-page/module';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/protected/*" element={<TodoRoute />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/protected/all" replace />} />
    </Routes>
  );
};
