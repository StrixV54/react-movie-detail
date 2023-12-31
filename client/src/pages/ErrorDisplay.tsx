import { Container, Typography } from "@mui/material";

/**
 * A Component to display Error Message
 * @param param0 error message to be displayed
 * @returns
 */
function ErrorDisplay({ error }: { error: string }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h1" color="error">
        ERROR
      </Typography>
      <Typography variant="h5" pt={2} pb={4}>
        Something Went Wrong
      </Typography>
      <Typography variant="h6">REASON: {error}</Typography>
    </Container>
  );
}

export default ErrorDisplay;
