import { Typography } from '@mui/material';

const Header = () => {
  return (
    <Typography
      variant="h5"
      color="primary"
      noWrap
      sx={{ padding: 2 }}
      textAlign="center"
    >
      Data Visualization Demo
    </Typography>
  );
};

export default Header;
