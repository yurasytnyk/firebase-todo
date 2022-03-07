import { IColors } from '../../../../components/add-popup/types/add-popup-types';
import { IListsCollection } from '../../../../firestore/types/lists-collection-types';

export interface IColorsState {
  data: IColors[];
}

export interface IListsState {
  data: IListsCollection[];
}
