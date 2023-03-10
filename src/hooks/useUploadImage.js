import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { fireStorage } from '../firebase';
import { useState } from 'react';

const useUploadImage = () => {
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const uploadImage = (file, id) => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = ref(fireStorage, 'images/' + id, metadata);
    return uploadBytes(storageRef, file)
      .then(() => {
        getDownloadURL(storageRef).then((url) => {
          localStorage.setItem('profile-pic', JSON.stringify(url));
          setImageUrl(url);
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return { imageUrl, error, uploadImage };
};

export default useUploadImage;
