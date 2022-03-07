import { 
  FC, 
  useContext, 
} from 'react';
import clsx from 'clsx';

import { Props } from '../types/badge-types';
import { AddPopupContext } from '../../../contexts/add-popup-context/context/add-popup-context';
import '../styles/badge-styles.scss';

export const Badge: FC<Props> = (props) => {
  const { 
    color,
    isPopup,
  } = props

  const { activeColor } = useContext(AddPopupContext);

  const classes = clsx(
    'badge',
    color && `badge--${color}`,
    'name' in activeColor && 
    activeColor.name === color && 
    isPopup && 'badge--active',
  );

  return (
    <i className={classes}></i>
  );
};
