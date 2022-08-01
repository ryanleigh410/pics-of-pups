import Box from '@mui/material/Box';


interface PupPicProps {
  pupPic: string;
}

const ImageContainer = ({ pupPic }: PupPicProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
          borderRadius: 2.5
        },
      }}
    >
      <img src={pupPic} alt="Picture of Puppy" />
    </Box>
  );
}

export default ImageContainer;