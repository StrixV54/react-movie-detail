import { Box, Container, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import CategoryBox from "../components/CategoryBox.tsx";

const categories = ["action", "crime", "drama"];

function Genres() {
  const movieDetails: [] = useLoaderData() as [];
  // const [movieDetails, setMovieDetails] = useState([]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const result = await getMoviesList();
  //     setMovieDetails(result);
  //   };
  //   getMovies();
  // }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ my: 4 }} align="center">
        Different Categories
      </Typography>
      <Box sx={{ height: "100%", width: "100%" }}>
        {categories.map((genre, id) => {
          return (
            <CategoryBox key={id} genre={genre} movieDetails={movieDetails} />
          );
        })}
      </Box>
    </Container>
  );
}

export default Genres;
