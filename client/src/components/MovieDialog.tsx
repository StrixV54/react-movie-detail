import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextareaAutosize,
  Theme,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { MovieDialogType } from "../utils/types";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import Image from "mui-image";
// import EditIcon from "@mui/icons-material/Edit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postDetails } from "../api/api";
import { COLOR_CONSTANTS } from "../utils/constants";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const MovieDialog = ({
  handleClose,
  open,
  description,
  id,
  movie,
  imdb_url,
  rating,
  category,
}: MovieDialogType) => {
  const theme = useTheme();
  const textAreaValueRef = useRef<HTMLTextAreaElement | null>(null);
  const [prevValue, setPrevValue] = useState<string>(description);
  const [isEditModeActive, setIsEditModeActive] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const saveDetailMutation = useMutation({
    mutationFn: postDetails,
    onSuccess: () => {
      queryClient.invalidateQueries(["movies"]);
    },
  });

  const handleSave = async () => {
    const newValue: string = textAreaValueRef.current!.value;
    try {
      if (prevValue === newValue) {
        alert("You are trying to save same value.");
        return;
      }
      saveDetailMutation.mutate({
        id: id,
        description: newValue,
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
    setIsEditModeActive(false);
    setPrevValue(newValue);
    handleClose();
  };

  return (
    <BootstrapDialog
      onClose={() => {
        setIsEditModeActive(false);
        handleClose();
      }}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {id + " : " + movie}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme: Theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
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
            md={4}
            sm={4}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <Image
              src={imdb_url}
              className="movie-image-detail"
              duration={300}
              style={{
                borderRadius: "10px",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </Grid>
          <Grid
            item
            alignItems="center"
            md={8}
            sm={8}
            xs={12}
            p={0}
            paddingX={{ md: 3, xs: 0 }}
            marginTop={{ xs: 3, md: 0 }}
            marginBottom={{ xs: 6, md: 0 }}
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
              <Typography variant="h6" mb={{ md: 2, xs: 1 }}>
                <strong>Rating</strong> : {rating}
              </Typography>
              <Typography
                variant="h6"
                mb={{ md: 2, xs: 1 }}
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <strong>Category</strong> : {category}
              </Typography>
              <Typography
                variant="h6"
                pb={0}
                alignItems="center"
                justifyContent="center"
                mb={{ md: 1, xs: 1 }}
                fontWeight="bold"
              >
                Description
              </Typography>
              <TextareaAutosize
                defaultValue={description}
                // maxRows={5}
                minRows={3}
                ref={textAreaValueRef}
                style={{
                  fontFamily: "sans-serif",
                  resize: "none",
                  fontSize: "1.2rem",
                  padding: isEditModeActive ? 8 : 0,
                  textDecoration: "none",
                  width: "100%",
                  color: theme.palette.text.textarea,
                  border: isEditModeActive
                    ? `solid 1px ${COLOR_CONSTANTS.LIGHT_GRAY}`
                    : "none",
                  background: "none",
                }}
                disabled={!isEditModeActive}
              ></TextareaAutosize>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => setIsEditModeActive((prev) => !prev)}
          // disabled={isEditModeActive}
          variant="text"
          sx={{
            color: theme.palette.text.link,
            paddingX: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.text.linkHoverBg,
            },
          }}
        >
          Edit Description
        </Button>
        <Button
          autoFocus
          onClick={handleSave}
          disabled={!isEditModeActive}
          variant="text"
          sx={{
            color: theme.palette.text.link,
            paddingX: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.text.linkHoverBg,
            },
          }}
        >
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default MovieDialog;
