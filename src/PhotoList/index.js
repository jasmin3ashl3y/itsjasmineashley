import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
          name: 'ranter',
          category: 'projects',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
          name: 'pokemon-stats',
          category: 'projects',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
          name: 'weather-dashboard',
          category: 'projects',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
          name: 'budget-tracker',
          category: 'projects',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'savoury-subscriptions',
            category: 'projects',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
      ]);
      const currentPhotos = photos.filter(photo => photo.category === category);

      const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
      }

      return (
        <div>
            {isModalOpen && (
            <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../assets/images/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                    ))}
            </div>
        </div>
    );
};

export default PhotoList;