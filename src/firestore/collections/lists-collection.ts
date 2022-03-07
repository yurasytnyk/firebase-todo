import { FirebaseClient } from '../firebase-client/firebase-client';
import { IListsCollection } from '../types/lists-collection-types';

export const listsCollection = FirebaseClient.createCollection<IListsCollection>('lists');
