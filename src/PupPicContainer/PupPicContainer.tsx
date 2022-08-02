import Box from '@mui/material/Box';

interface PupPicProps {
  pupPic: string;
}

const ImageContainer = ({ pupPic }: PupPicProps) => {
  const style = {
    display: 'flex',
    '& > :not(style)': {
      width: 450,
      height: 400,
      borderRadius: 2.5
    }
  };

  return (
    <Box
      sx={style}
    >
      <img src={pupPic} alt="Picture of Puppy" />
    </Box>
  );
}

export default ImageContainer;