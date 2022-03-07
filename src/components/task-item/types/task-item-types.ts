import { ITasks } from "../../../firestore/types/lists-collection-types";

export interface Props {
  id?: string;
  item: ITasks;
  tasksData: ITasks[];
}
