import { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '@context/firebase';
import { DatabaseContentType, NetflixContentType } from '@/types';

type ContentTargetType = 'films' | 'series';
export default function useContent(target: ContentTargetType) {
  const [content, setContent] = useState<NetflixContentType[]>([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      ?.firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => {
          const data = contentObj.data() as DatabaseContentType;
          return {
            ...data,
            docId: contentObj.id,
          };
        });

        setContent(allContent);
      })
      .catch((error) => console.error(error.message));
  }, [firebase]);

  return { [target]: content };
}
