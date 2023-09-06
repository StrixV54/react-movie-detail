// import React from 'react'

import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMoviesList } from "../api/api.tsx";
import CardBox from "../components/CardBox.tsx";

interface propsType {
  movie: string;
  description: string;
  id: string;
  imdb_url: string;
  rating: string;
}

const categories = ["action", "crime", "drama"];

function Genres() {
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
        Different Categories
      </Typography>
      <Box sx={{ height: "100%", width: "100%" }}>
        {categories.map((genre, id) => {
          return (
            <Grid
              container
              key={id}
              spacing={2}
              pb={6}
              sx={{
                paddingX: { xl: 10, md: 4, xs: 4 },
                alignItems: { md: "normal", xs: "center" },
                justifyContent: { md: "normal", xs: "center" },
              }}
              // alignItems="center"
              // justifyContent="center"
            >
              <Grid item key="genre" md={12} xs={12}>
                <Typography
                  sx={{
                    my: 2,
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    color: "#0a49be",
                    textAlign: { xs: "center", md: "left" },
                  }}
                  // align="center"
                >
                  {genre.toUpperCase()}
                </Typography>
              </Grid>
              {movieDetails
                .filter((item: { category: string }) => item.category === genre)
                .map((data: propsType, id) => {
                  return (
                    <Grid md={3} sm={6} item key={id}>
                      <CardBox {...data} />
                    </Grid>
                  );
                })}
            </Grid>
          );
        })}
      </Box>
    </Container>
  );
}

export default Genres;
