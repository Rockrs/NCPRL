import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { fireStoreDb } from '../firebase';

const useUpdateProfile = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTryAgain, setTryAgain] = useState(true);
  const navigate = useNavigate();

  const updateProfile = (data) => {
    setLoading(true);
    setTryAgain(false);
    setDoc(
      doc(fireStoreDb, 'users', user.uid),
      {
        ...data,
      },
      { merge: true }
    )
      .then(() => {
        setTryAgain(true);
        setLoading(false);
        setError(null);
        navigate('/user-home');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setTryAgain(false);
      });
  };

  return {
    loading,
    error,
    isTryAgain,
    updateProfile,
    setError,
    setTryAgain,
  };
};

export default useUpdateProfile;
