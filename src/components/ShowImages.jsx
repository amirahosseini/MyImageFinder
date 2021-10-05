import React from 'react';

const ImageList = props => {
  const images = props.ImagesID.map(MyImage => {
    return <img src={MyImage.urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
