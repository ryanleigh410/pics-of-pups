import { ImageList, ImageListItem} from '@mui/material';

interface PupPicProps {
  pupPics: string[];
  setPrimaryPupPic: (imageUrl: string) => void;
}

const imageListItemStyle = {
  height: '100%'
}

const imageStyle = {
  borderRadius: '10px'
}

function PupPicList({ pupPics, setPrimaryPupPic }: PupPicProps) {
  return (
      <ImageList 
        sx={{ 
          mb: 8, 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
        gap={15}
      >
        {pupPics.map((image) => (
          <ImageListItem key={image} style={imageListItemStyle} onClick={() => setPrimaryPupPic(image)}>
            <img
              src={`${image}`}
              srcSet={`${image}`}
              alt={image}
              loading="lazy"
              style={imageStyle}
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

export default PupPicList;