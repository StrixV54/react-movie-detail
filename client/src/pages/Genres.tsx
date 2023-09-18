import { Box, Container, Typography } from "@mui/material";
import CategoryBox from "../components/CategoryBox.tsx";
import { useQuery } from "@tanstack/react-query";
import { getMoviesList } from "../api/api.tsx";
import Loading from "./Loading.tsx";
import { ApiError } from "../utils/types.tsx";
import ErrorDisplay from "./ErrorDisplay.tsx";

const categories = ["action", "crime", "drama"];

function Genres() {
  const response = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMoviesList(),
  });

  if (response.isLoading) return <Loading />;
  if (response.isError) {
    const errorMessage: ApiError = response?.error as ApiError;
    return <ErrorDisplay error={errorMessage.message} />;
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ my: 4 }} align="center">
        Different Categories
      </Typography>
      <Box sx={{ height: "100%", width: "100%" }}>
        {categories.map((genre, id) => {
          return (
            <CategoryBox key={id} genre={genre} movieDetails={response.data} />
          );
        })}
      </Box>
    </Container>
  );
}

export default Genres;
