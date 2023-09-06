// import React from 'react'

import { Box, Container, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import CardBox from "../components/CardBox";

interface propsType {
  movie: string;
  description: string;
  id: string;
  imdb_url: string;
  rating: string;
}

function MovieList() {
  const movieDetails: [] = useLoaderData() as [];
  // const [movieDetails, setMovieDetails] = useState(user);

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
        Top 10 Movies IMDB List
      </Typography>
      <Box
        sx={{ height: "100%", width: "100%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          spacing={3}
          pb={6}
          sx={{
            paddingX: { xl: 8, md: 4, xs: 4 },
            alignItems: { md: "normal", xs: "center" },
            justifyContent: { md: "normal", xs: "center" },
          }}
        >
          {movieDetails &&
            movieDetails.map((data: propsType, id) => {
              return (
                <Grid md={3} sm={6} item key={id}>
                  <CardBox {...data} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
}

export default MovieList;
