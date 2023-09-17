import { Grid, Typography } from "@mui/material";
import CardBox from "./CardBox";
import { CategoryType, MovieDetailType } from "../utils/types";

function CategoryBox({ genre, movieDetails }: CategoryType ) {
  return (
    <Grid
      container
      spacing={3}
      pb={6}
      sx={{
        paddingX: { xl: 8, md: 4, xs: 2 },
        alignItems: { md: "normal", xs: "center" },
        justifyContent: { md: "normal", xs: "center" },
      }}
    >
      <Grid item key="genre" md={12} xs={12}>
        <Typography
          color="text.heading"
          sx={{
            my: { md: 2, xs: 0 },
            fontSize: "1.3rem",
            fontWeight: "800",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {genre.toUpperCase()}
        </Typography>
      </Grid>
      {movieDetails!
        .filter(item => item.category === genre)
        .map((data: MovieDetailType, id) => {
          return (
            <Grid md={3} sm={6} item key={id}>
              <CardBox {...data} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default CategoryBox;
