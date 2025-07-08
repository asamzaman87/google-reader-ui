import { Backdrop, Box, CircularProgress } from "@mui/material";

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default Loader;
