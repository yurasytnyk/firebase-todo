export interface Props {
  tasksData: ITodoListData[];
}

export interface ITodoListData {
  id?: string;
  colorId: number;
  color: string;
  name: string;
  active: boolean;
}
