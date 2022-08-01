import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PetsIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pics of Pups
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;