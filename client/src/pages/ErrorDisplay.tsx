import { Container, Typography } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ErrorDisplay({ error }: { error: any }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000000",
        backgroundColor: "#ffffff",
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
