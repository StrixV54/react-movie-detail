// import React from 'react'

import {
  Box,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Image from "mui-image";
import { postDetails } from "../api/api.tsx";

function Movie() {
  const {
    state: { data },
  } = useLocation();

  const { movie, description, rating, imdb_url, category } = data;
  const { id } = useParams();
  const textAreaValueRef = useRef<HTMLTextAreaElement | null>(null);
  const [isEditModeActive, setIsEditModeActive] = useState(false);

  const handleSave = async () => {
    try {
      const postDescription = async () => {
        await postDetails(id as string, textAreaValueRef.current!.value);
      };
      postDescription();
    } catch (error) {
      console.log("Something went wrong", error);
    }
    setIsEditModeActive(false);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ my: 4 }} align="center">
        {movie}
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        p={0}
      >
        <Grid
          item
          alignItems="center"
          md={3}
          sm={4}
          xs={12}
          display="flex"
          justifyContent="center"
        >
          <Image
            src={imdb_url}
            width={300}
            duration={0}
            style={{ borderRadius: "10px" }}
          />
        </Grid>
        <Grid
          item
          alignItems="center"
          md={7}
          sm={7}
          xs={12}
          p={0}
          marginTop={{ xs: 3, md: 0 }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 0,
            }}
          >
            <Typography variant="h6" pb={3}>
              Rating : {rating}
            </Typography>
            <Typography variant="h6" pb={3}>
              Category : {category}
            </Typography>
            <Typography
              variant="h6"
              pb={0}
              alignItems="center"
              justifyContent="center"
            >
              Description
              <Tooltip title="Edit">
                <IconButton
                  sx={{
                    border: "solid 1px #d0d0d0",
                    padding: "2px",
                    margin: "0px 5px",
                  }}
                  onClick={() => setIsEditModeActive((prev) => !prev)}
                >
                  <EditIcon sx={{ height: "15px", width: "15px" }} />
                </IconButton>
              </Tooltip>
            </Typography>
            <TextareaAutosize
              defaultValue={description}
              maxRows={5}
              minRows={3}
              ref={textAreaValueRef}
              // onChange={handleTextChange}
              style={{
                resize: "none",
                fontSize: "1rem",
                marginTop: "12px",
                textDecoration: "none",
                border: isEditModeActive ? "solid 1px #636363" : "none",
                background: "none",
              }}
              disabled={!isEditModeActive}
              // fullWidth
              // sx={{ wordWrap: "break-word", height: "300px" }}
              // onChange={handleTextChange}
            ></TextareaAutosize>
            {isEditModeActive ? (
              <LoadingButton
                color="primary"
                onClick={handleSave}
                // loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
                sx={{
                  fontSize: "11px",
                  width: "fit-content",
                  marginTop: "10px",
                }}
              >
                <span>Save</span>
              </LoadingButton>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Movie;
