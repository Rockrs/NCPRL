import { useState } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { fireStoreDb } from '../firebase';

const useGetProfile = () => {
  const [data, setdata] = useState(null);

  const getProfileData = (id) => {
    return onSnapshot(doc(fireStoreDb, 'users', id), (doc) => {
      setdata(doc.data());
    });
  };
  return { getProfileData, data };
};

export default useGetProfile;
