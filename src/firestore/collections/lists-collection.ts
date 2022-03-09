import { FirebaseClient } from '../firebase-client/firebase-client';
import { IListsCollection } from '../types/lists-collection-types';

export const listsCollection = (userId: string) => {
  return FirebaseClient.createCollection<IListsCollection>(
    `users/${userId}/lists`
  );
};
