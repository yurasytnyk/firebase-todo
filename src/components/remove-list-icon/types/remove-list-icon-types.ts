import { ITasks } from "../../../firestore/types/lists-collection-types";

export interface Props {
  listId: string;
  taskId?: ITasks;
  onClickHandler: (list: string, task?: ITasks) => void;
}
