import { FirebaseClient } from '../firebase-client/firebase-client';
import { IColorsCollection } from '../types/colors-collection-types';

export const colorsCollection = FirebaseClient.createCollection<IColorsCollection>('colors');
