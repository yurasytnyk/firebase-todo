import { FC } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Props } from '../types/route-guard-types';
import { AuthContext } from '../../../contexts/auth-context/context';

export const RouteGuard: FC<Props> = (props) => {
  const { children } = props;
  const { isAuth } = useContext(AuthContext);

  if (!isAuth.uuid.length) {
    return <Navigate to="/login" />;
  }

  return children;
};
