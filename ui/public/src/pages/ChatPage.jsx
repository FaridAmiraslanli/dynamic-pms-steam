import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Box,
  Divider,
  TextField,
  List,
  Fab,
  Button,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Typography, InputBase } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles({
  header: {
    padding: "5px",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "12vh",
  },
  headerTitle: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  chatSection: {
    width: "100%",
    height: "88vh",
    backgroundColor: "#9B9B9B",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
    backgroundColor: "#C6C6C6",
  },
  messageArea: {
    backgroundColor: "#9B9B9B",
    height: "72vh",
    overflowY: "auto",
  },
  btnicon: {
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
  },
});

const ChatPage = () => {
  const [focusChatEdit, setFocusChatEdit] = useState(false);
  const classes = useStyles();
  const change = () => {
    setFocusChatEdit((prev) => !prev);
  };

  return (
    <div>
      <Grid container className={classes.header} alignItems="center">
        <Grid item xs={5} sx={{ textAlign: "left" }}>
          <Button>
            <ArrowBackIosNewIcon
              sx={{
                width: "40px",
                height: "40px",
                padding: "7.5px 12.5px",
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "left" }}>
          <Typography
            variant="h5"
            className={`header-message ${classes.headerTitle}`}
          >
            God of War
          </Typography>
        </Grid>
      </Grid>

      <Grid container component={Paper} className={classes.chatSection}>
        <Grid
          item
          xs={3}
          className={classes.borderRight500}
          style={{
            backgroundColor: "#e0e0e0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px 20px 30px",
          }}
        >
          <Box>
            <Box fullWidth>
              <Button
                style={{
                  background: "#9EFF23",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "16px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  width: `calc(100% - 50px)`,
                  height: "40px",
                  margin: "10px 0",
                  marginRight: "10px",
                  textTransform: "lowercase",
                }}
              >
                new request
              </Button>
              <Button
                style={{
                  maxWidth: "40px",
                  maxHeight: "40px",
                  minWidth: "40px",
                  minHeight: "40px",
                  backgroundColor: "#fff",
                }}
              />
            </Box>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#727272",
                margin: "10px 0",
              }}
            >
              Demo Research
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0",
                height: "40px",
                backgroundColor: `${focusChatEdit ? "#343540" : "transparent"}`,
                borderRadius: `${focusChatEdit && "4px"}`,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  className={classes.btnicon}
                  size="small"
                  style={{
                    marginRight: "5px",
                  }}
                >
                  {focusChatEdit ? (
                    <RiDeleteBin6Line color="#fff" fontSize="24px" />
                  ) : (
                    <ChatBubbleOutlineIcon
                      fontSize="30px"
                      style={{ color: "#727272" }}
                    />
                  )}
                </Button>

                <div contentEditable>
                  <Typography
                    variant="h1"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "16px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: `${focusChatEdit ? "#fff" : "#000"}`,
                    }}
                  >
                    God of War
                  </Typography>
                </div>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "auto",
                }}
              >
                <Button
                  className={classes.btnicon}
                  size="small"
                  onClick={change}
                >
                  {focusChatEdit ? (
                    <AiOutlineCheck color="#fff" fontSize="24px" />
                  ) : (
                    <MdModeEditOutline fontSize="24px" />
                  )}
                </Button>
                <Button
                  className={classes.btnicon}
                  size="small"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  {focusChatEdit ? (
                    <AiOutlineClose color="#fff" fontSize="24px" />
                  ) : (
                    <RiDeleteBin6Line fontSize="24px" />
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Upgrade to Plus
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ backgroundColor: "red", overflow: "auto" }}>
          <List className={classes.messageArea}>{/* List items */}</List>
          <Divider />
          <Grid
            container
            style={{ padding: "10px", backgroundColor: "#9B9B9B" }}
          >
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                height: "10vh",
                padding: "0 0 0 7px",
                outline: "hidden",
                borderRadius: "8px",
              }}
            >
              <TextField
                id="outlined-basic-email"
                label="Send a message"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    "& .MuiInputBase-input": {
                      borderBottom: "none",
                    },
                  },
                  inputComponent: InputBase,
                }}
              />
              <Fab
                color="primary"
                aria-label="add"
                style={{
                  height: "10vh",
                  borderRadius: 0,
                  backgroundColor: "white",
                  color: "#C6C6C6",
                  boxShadow: "none",
                  borderRadius: "8px",
                }}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatPage;
