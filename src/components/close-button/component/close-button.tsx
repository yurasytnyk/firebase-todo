import { 
  FC, 
  useContext,
} from 'react';

import CloseIconSvg from '../../../assets/img/close.svg';
import { AddPopupContext } from '../../../contexts/add-popup-context/context/add-popup-context';
import '../styles/close-button-styles.scss';

export const CloseButton: FC = () => {
  const { 
    visible, 
    setVisible,
  } = useContext(AddPopupContext);

  const onClickHandler = () => setVisible(!visible);

  return (
    <div 
      className="close-button" 
      onClick={onClickHandler}
    >
      <img
        src={CloseIconSvg} 
        alt="close icon" 
      />
    </div>
  );
};
