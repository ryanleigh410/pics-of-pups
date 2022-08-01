import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface PupPicProps {
  images: string[];
}

function PupPicList({ images }: PupPicProps) {
  return (
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={image}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

export default PupPicList;