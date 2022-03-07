import { 
  FC, 
  useContext, 
} from 'react';
import { AddPopupContext } from '../../../contexts/add-popup-context/context/add-popup-context';

import { useAppSelector } from '../../../store/hooks/use-app-selector/use-app-selector';
import { IColors } from '../../add-popup/types/add-popup-types';
import { Badge } from '../../badge/component';

export const AddPopupColors: FC = () => {
  const colors = useAppSelector((state) => state.colors.data);
  const { onColorChangeHandler } = useContext(AddPopupContext);
  
  const onClickHandler = (name: IColors) => () => {
    onColorChangeHandler(name);
  };

  return (
    <ul className="add-popup__colors">
      {colors.map((color) => (
        <li 
          key={color.id}
          onClick={onClickHandler(color)}
        >
          <Badge 
            color={color.name}
            isPopup={true}
          />
        </li>
      ))}
    </ul>
  );
};
