import React from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from '@material-tailwind/react';

const Quiz = ({ name, bio, imageLink, websiteLink }) => {
  const handleImageClick = () => {
    window.open(websiteLink, '_blank');
  };

  return (
    <Card>
      <div className="relative h-64 cursor-pointer" onClick={handleImageClick}>
        <CardImage
          src={imageLink}
          alt="Quiz image"
          className="h-full w-full object-cover rounded-lg shadow-xl shadow-blue-gray-900/50"
        />
      </div>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{bio}</CardText>
      </CardBody>
    </Card>
  );
};

export default Quiz;
