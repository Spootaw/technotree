import React from 'react';
import '../App';
import { useAppContext } from '../context/appContext';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const isVideo = /https?.*?\.mp4/;

  console.log('favorites are', favorites);

  const favoritesChecker = id => {
    const boolean = favorites.some(dog => dog.fileSizeBytes === id);
    return boolean;
  };

  return (
    <>
      <div className="container mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5">
          {favorites.length > 0 ? (
            favorites.map((dogImage, index) => (
              <div
                key={index}
                className="bg-white text-gray-500 text-lg font-bold text-center rounded-lg"
              >
                {isVideo.test(dogImage) ? (
                  <video
                    className={'image-fluid'}
                    width="565"
                    height="442"
                    controls
                  >
                    <source src={dogImage.url} type="video/mp4" />
                  </video>
                ) : (
                  <img className={'image-fluid'} src={dogImage.url} alt={''} />
                )}
                {favoritesChecker(dogImage.fileSizeBytes) ? (
                  <button
                    onClick={() => removeFromFavorites(dogImage.fileSizeBytes)}
                  >
                    Remove from Favorites
                  </button>
                ) : (
                  <button onClick={() => addToFavorites(dogImage)}>
                    Add to Favorites
                  </button>
                )}
              </div>
            ))
          ) : (
              <div className={'text-4xl text-center mt-40'}>
                  <h1>You don't have any favorite dogs yet!</h1>
              </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
