import { Grid, Typography } from "@mui/material";
import CardBox from "./CardBox";

interface propsTypeCategory {
  id?: number;
  genre: string;
  movieDetails: [];
}

interface propsTypeCard {
  movie: string;
  description: string;
  id: string;
  imdb_url: string;
  rating: string;
}

function CategoryBox({ genre, movieDetails }: propsTypeCategory) {
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
          color="primary"
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
      {movieDetails
        .filter((item: { category: string }) => item.category === genre)
        .map((data: propsTypeCard, id) => {
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
