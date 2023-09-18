import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  // console.log("Error", error);
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
        {error.status}
      </Typography>
      <Typography variant="h5" pt={2} pb={4}>
        {error.statusText}
      </Typography>
      {error?.data ? (
        <Typography variant="h6">
          Something Went Wrong : {error.data}
        </Typography>
      ) : (
        <Typography variant="body2">
          Something Went Wrong : {error.stack}
        </Typography>
      )}
    </Container>
  );
}

export default ErrorPage;
