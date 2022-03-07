export interface IListsCollection {
  id?: string;
  name: string;
  active: boolean;
  colorId: number;
  tasks: ITasks[];
}

export interface ITasks {
  id: string;
  title: string;
  completed: boolean;
}
