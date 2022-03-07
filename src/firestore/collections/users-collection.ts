import { FirebaseClient } from '../firebase-client/firebase-client';
import { IUsersCollection } from '../types/users-collection-types';

export const usersCollection = FirebaseClient.createCollection<IUsersCollection>('users');