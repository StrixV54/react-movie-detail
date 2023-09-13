// import React from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

interface propsType {
  movie: string;
  description: string;
  id: string;
  imdb_url: string;
  rating: string;
}

function CardBox(props: propsType) {
  const { movie, description, id, imdb_url } = props;

  return (
    <Card
      sx={{
        maxWidth: 385,
        minHeight: 440,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      key={id}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={imdb_url}
        title="green iguana"
        component="img"
        loading="lazy"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {movie}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography color="text.link">
          <Link
            to={"/movie/" + id + "?name=" + movie}
            // state={{
            //   data: props,
            // }}
            className="link-to-movie"
            style={{
              color: "inherit",
            }}
          >
            Details
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardBox;
