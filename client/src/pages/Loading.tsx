import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        marginTop: "50vh",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        sx={{ height: "100px !important", width: "100px !important" }}
      />
    </Box>
  );
}

export default Loading;
