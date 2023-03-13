import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { fireStorage } from '../firebase';

const useUploadImage = () => {
  const [imageUrlAfterUpload, setImageUrlAfterUpload] = useState(null);
  const metadata = {
    contentType: 'image/jpeg',
  };

  const uploadImage = (file, id) => {
    const storageRef = ref(fireStorage, 'images/' + id, metadata);
    return uploadBytes(storageRef, file)
      .then(() => {
        getDownloadURL(storageRef)
          .then((url) => {
            setImageUrlAfterUpload(url);
          })
          .catch((err) => {
            console.error(err.code);
          });
      })
      .catch((err) => {
        console.error(err.code);
      });
  };
  return { uploadImage, imageUrlAfterUpload };
};

export default useUploadImage;
