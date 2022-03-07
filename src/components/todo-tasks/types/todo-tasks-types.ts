import { ITasks } from '../../../firestore/types/lists-collection-types';

export interface IListData {
  id: string;
  title: string;
  tasks: ITasks[];
  color: string;
}
