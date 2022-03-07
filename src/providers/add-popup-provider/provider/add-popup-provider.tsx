import { FC } from 'react';

import { AddPopupContext } from '../../../contexts/add-popup-context/context/add-popup-context';
import { usePopup } from '../../../hooks/use-popup';

export const AddPopupProvider: FC = (props) => {
  const {
    children, 
  } = props;

  const popup = usePopup();

  return (
    <AddPopupContext.Provider value={popup}>
      {children}
    </AddPopupContext.Provider>
  );
};
