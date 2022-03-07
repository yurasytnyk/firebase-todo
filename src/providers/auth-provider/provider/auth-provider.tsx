import { Props } from '../types/auth-provider-types';
import { useAuth } from '../../../hooks/use-auth';
import { AuthContext } from '../../../contexts/auth-context/context';

export const AuthProvider = (props: Props) => {
  const { children } = props;
  const authContextValues = useAuth();

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
