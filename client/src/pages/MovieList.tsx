// import React from 'react'

import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardBox from "../components/CardBox";
import { getMoviesList } from "../api/api.tsx";

interface propsType {
  movie: string;
  description: string;
  id: string;
  imdb_url: string;
  rating: string;
}

function MovieList() {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const result = await getMoviesList();
      setMovieDetails(result);
    };
    getMovies();
  }, []);

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
          spacing={2}
          pb={6}
          sx={{
            paddingX: { xl: 10, md: 4, xs: 4 },
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
