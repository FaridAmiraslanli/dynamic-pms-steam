import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import styled from "styled-components";

const ChatTemplate = ({sendMessage}) => {
  const templateQuestions = [
    `What is Kratos' main objective in the "God of War" series?`,
    `What are the locations in the "God of War" games and how are these
    environments depicted?`,
    `What are the locations in the "God of War" games and how are these
    environments depicted?`,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "60px",
      }}
    >
      <Typography
        variant="h2"
        color="white"
        sx={{ fontSize: "32px", fontWeight: "700", letterSpacing: "0.25px" }}
      >
        Example
      </Typography>
      <Stack direction="row" justifyContent="space-between" gap="12px">
        {templateQuestions.map((ques) => (
          <S.Template onClick={() => sendMessage(ques)}>
            <Typography component="p">{ques}</Typography>
            <FiArrowDownRight />
          </S.Template>
        ))}
      </Stack>
    </Box>
  );
};

const S = {
  Template: styled(Box)`
    max-width: 345px;
    background-color: #8670ff;
    border-radius: 16px;
    padding: 16px;
    height: 146px;

    position: relative;
    cursor: pointer;

    p {
      font-size: 18px;
      letter-spacing: 0.5px;
      font-weight: 600;
      line-height: 24px;
    }

    svg {
      position: absolute;
      color: #6551d3;
      bottom: 13px;
      right: 13px;
      font-size: 50px;
      /* width: 30px;
      height: 30px; */
    }
  `,
};

export default ChatTemplate;
