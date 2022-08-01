import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

interface PupPicProps {
  pupPics: string[];
  setPrimaryPupPic: (imageUrl: string) => void;
}

const imageStyle = {
  height: '100%'
}

function PupPicList({ pupPics, setPrimaryPupPic }: PupPicProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ImageList sx={{ width: 1000}} cols={5} gap={15} rowHeight={165}>
        {pupPics.map((image) => (
          <ImageListItem key={image} style={imageStyle} onClick={() => setPrimaryPupPic(image)}>
            <img
              src={`${image}`}
              srcSet={`${image}`}
              alt={image}
              loading="lazy"
              className="PupPicListImage"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
  );
}

export default PupPicList;