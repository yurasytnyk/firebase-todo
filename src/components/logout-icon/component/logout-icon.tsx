import { 
  FC, 
  useContext, 
} from 'react';

import { Props } from '../types/logout-icon-types';
import { AuthContext } from '../../../contexts/auth-context/context';
import '../styles/logout-icon-styles.scss';

export const LogoutIcon: FC<Props> = (props) => {
  const { icon } = props;
  
  const { signOut } = useContext(AuthContext);

  const onClickHandler = () => signOut();

  return (
    <div 
      className="logout__icon"
      onClick={onClickHandler}  
    >
      <img src={icon} alt="logout icon" />
    </div>
  );
};
