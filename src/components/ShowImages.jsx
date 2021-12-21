import React from 'react';

const ImageList = props => {
  const images = props.ImagesID.map(MyImage => {
    return(
    <div>
        <img src={MyImage.urls.regular} />
    </div>
    );
  });

  return (
    <div className='grid grid-cols-4 gap-4'> 
      {images}
    </div>
  )
};

export default ImageList;
