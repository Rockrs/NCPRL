import { useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { fireStorage } from '../firebase';

export const useGetImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const downloadImage = (id) => {
    getDownloadURL(ref(fireStorage, 'images/' + id))
      .then((url) => {
        setImageUrl(url);
      })
      .catch((err) => {
        console.error(err.code);
      });
  };
  return { downloadImage, imageUrl };
};
