import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.log(error);
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
      }}
    >
      <Typography variant="h1" color="error">
        {error.status}
      </Typography>
      <Typography variant="h5" pt={2} pb={4}>
        {error.statusText}
      </Typography>
      <Typography variant="h6">Something Went Wrong : {error.data}</Typography>
    </Container>
  );
}

export default ErrorPage;
