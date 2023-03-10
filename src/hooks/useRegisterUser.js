import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTryAgain, setTryAgain] = useState(true);
  const navigate = useNavigate();

  const registerUser = (userCredential) => {
    setLoading(true);
    setTryAgain(false);
    createUserWithEmailAndPassword(
      auth,
      userCredential.email,
      userCredential.password
    )
      .then(function (result) {
        return updateProfile(result.user, {
          displayName: userCredential.fullName,
        });
      })
      .then(() => {
        navigate('/user-home');
      })
      .catch(function (error) {
        setError(error.message);
        setTryAgain(false);
        setLoading(false);
      });
  };

  return { loading, error, isTryAgain, registerUser, setError, setTryAgain };
};

export default useRegisterUser;
