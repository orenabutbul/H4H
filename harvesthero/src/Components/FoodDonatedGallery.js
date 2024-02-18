import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/Users/addisonhoff/Documents/GitHub/H4H/harvesthero/src/firebaseconfig'; // Adjust this path

const ImageGallery = () => {
  const [featuredImage, setFeaturedImage] = useState(null);
  const [gridImages, setGridImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "donations"));
      const imagesArray = querySnapshot.docs.map(doc => doc.data().imageUrl).filter(url => url != null);
      
      if (imagesArray.length > 0) {
        setFeaturedImage(imagesArray[0]);
        setGridImages(imagesArray.slice(1));
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {featuredImage && (
        <div className="mb-4">
          <img className="h-auto w-full max-w-full rounded-lg object-cover" src={featuredImage} alt="Featured Image" style={{ maxHeight: '60vh' }} />
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {gridImages.map((imageUrl, index) => (
          <div key={index} className="overflow-hidden">
            <img className="h-auto w-full max-w-full rounded-lg object-cover" src={imageUrl} alt={`Image ${index + 2}`} style={{ maxHeight: '20vh' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
