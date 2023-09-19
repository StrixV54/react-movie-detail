// import React from 'react'

import { Box, Container, Grid, Typography } from "@mui/material";
import CardBox from "../components/CardBox";
import { useQuery } from "@tanstack/react-query";
import { getMoviesList } from "../api/api";
import { ApiError, MovieDetailType } from "../utils/types";
import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";

function MovieList() {
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
            paddingX: { xl: 8, md: 4, xs: 2 },
            alignItems: { md: "normal", sm: "center" },
            justifyContent: { md: "normal", sm: "center" },
          }}
        >
          {response.data?.map((item: MovieDetailType, index: number) => {
            return (
              <Grid
                md={3}
                sm={6}
                xs={12}
                item
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <CardBox {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default MovieList;
