import { ITasks } from '../../../firestore/types/lists-collection-types';

export interface Props {
  id?: string;
  tasksData: ITasks[];
}
