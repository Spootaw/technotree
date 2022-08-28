import React, { useState, useEffect } from 'react';
import '../App';
import { useAppContext } from '../context/appContext';
const DogList = () => {
  const [dogImages, setDogImages] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const isVideo = /https?.*?\.mp4/;
  const favoritesChecker = id => {
    const boolean = favorites.some(
      dog => generateKey(dog.fileSizeBytes) === id
    );
    return boolean;
  };

  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogRequests = new Array(6)
            .fill('https://random.dog/woof.json')
            .map(url =>
                fetch(url)
                    .then(resp => resp.json())
                    .then(dogObject => dogObject)
            );

        const dogs = await Promise.all(dogRequests);
        setDogImages(dogs);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  console.log(dogImages);

  return (
    <>
      <div className="container mx-auto mb-30 gallery-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-5">
          {dogImages.map(dogImage => (
            <div
              key={generateKey(dogImage.fileSizeBytes)}
              className="bg-white text-gray-500 text-lg font-bold text-center rounded-lg"
            >
              {isVideo.test(dogImage.url) ? (
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
              {favoritesChecker(generateKey(dogImage.fileSizeBytes)) ? (
                <button
                  onClick={() =>
                    removeFromFavorites(generateKey(dogImage.fileSizeBytes))
                  }
                >
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(dogImage)}>
                  Add to Favorites
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={'w-full mx-auto  text-center mt-20 mb-40'}>
        <button onClick={() => window.location.reload()} className="transition duration-150 ease-out hover:ease-in w-52 text-xl bg-gray-400 hover:bg-gray-700 text-white font-bold py-5 px-1 rounded-full">
          Next
        </button>
      </div>
    </>
  );
};

export default DogList;
