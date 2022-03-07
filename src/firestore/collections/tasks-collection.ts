import { FirebaseClient } from "../firebase-client/firebase-client";
import { ITasksCollection } from "../types/tasks-collection-types";

export const tasksCollection = FirebaseClient.createCollection<ITasksCollection>('tasks');