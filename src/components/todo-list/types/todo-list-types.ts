import { IListsCollection } from '../../../firestore/types/lists-collection-types';

export interface Props {
  filteredData: IListsCollection[];
}

export interface ITodoListData {
  id?: string;
  colorId: number;
  color: string;
  name: string;
  active: boolean;
}
