import { IListsCollection } from '../../../../firestore/types/lists-collection-types';

export interface IAddPopup {
  userId: string;
  data: IListsCollection;
}
