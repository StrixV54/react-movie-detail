// import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import Card from "@mui/material/Card";
import MovieDialog from "./MovieDialog";
import { useState } from "react";
import { MovieDetailType } from "../utils/types";

const DetailButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.link,
  backgroundColor: theme.palette.text.linkBg,
  border: "none",
  "&:hover": {
    backgroundColor: theme.palette.text.linkHoverBg,
    border: "none",
  },
}));

function CardBox(props: MovieDetailType) {
  // const theme = useTheme();
  const { movie, description, id, imdb_url } = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        draggable={false}
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
        <DetailButton
          onClick={handleClickOpen}
          variant="outlined"
          sx={{ fontWeight: "bold" }}
        >
          Details
        </DetailButton>
        <MovieDialog handleClose={handleClose} open={open} {...props} />
      </CardActions>
    </Card>
  );
}

export default CardBox;
