import { ITasks } from '../../../firestore/types/lists-collection-types';
import { IColors } from '../../add-popup/types/add-popup-types';

export interface Props {
  id: string;
  color: IColors;
  label: string;
  active: boolean;
  tasks: ITasks[];
}
