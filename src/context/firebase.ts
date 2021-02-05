import { createContext } from 'react';
import Firebase from 'firebase/app';
import { firebase } from '@lib/firebase.prod';

type FirebaseContextType = {
  firebase?: Firebase.app.App;
};
export const FirebaseContext = createContext<FirebaseContextType>({});
