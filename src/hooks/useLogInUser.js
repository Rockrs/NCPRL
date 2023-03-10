import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const useLogInUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTryAgain, setTryAgain] = useState(true);
  const navigate = useNavigate();

  const loginUser = (userCredential) => {
    setLoading(true);
    setTryAgain(false);
    signInWithEmailAndPassword(
      auth,
      userCredential.email,
      userCredential.password
    )
      .then(() => {
        navigate('/user-home');
      })
      .catch(function (error) {
        setError(error.message);
        setTryAgain(false);
        setLoading(false);
      });
  };

  return { loading, error, isTryAgain, loginUser, setError, setTryAgain };
};

export default useLogInUser;
