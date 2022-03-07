import { useState } from 'react';
import { IColors } from '../../components/add-popup/types/add-popup-types';

export const usePopup = () => {
  const [visible, setVisible] = useState(false);
  const [activeColor, setActiveColor] = useState<IColors | {}>({
    id: 8, 
    hex: '#ff6464', 
    name: 'RED',
  });

  const onColorChangeHandler = (color: IColors) => {
    setActiveColor(color);
  };

  return {
    activeColor,
    onColorChangeHandler,
    visible,
    setVisible,
  };
};
