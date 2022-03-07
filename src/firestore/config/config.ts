import { initializeApp } from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBpwp0m2xI6yR18Ih9F1nG9jMhMzV8UiGs',
  authDomain: 'firestore-todo-faf8b.firebaseapp.com',
  projectId: 'firestore-todo-faf8b',
  storageBucket: 'firestore-todo-faf8b.appspot.com',
  messagingSenderId: '544241656062',
  appId: '1:544241656062:web:372463f3ebadb879de05af',
};

export const firebase = initializeApp(config);
