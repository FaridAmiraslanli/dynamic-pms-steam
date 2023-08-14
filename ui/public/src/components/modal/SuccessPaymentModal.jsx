import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";

const SuccessPaymentModal = () => {
  return (
    <Dialog
      open={false}
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "#181B29",
          borderRadius: "8px",
          width: "920px",
          //   height: "504px",
          display: "flex",
          padding: "5px 10px",
        },
      }}
    >
      <DialogTitle
        sx={{
          color: "white",
          alignSelf: "center",
          "& svg": { fontSize: "60px" },
        }}
      >
        <BsFillCheckCircleFill />
      </DialogTitle>
      <DialogContent
        sx={{
          marginTop: "20px",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <Typography as="h1" sx={{ fontSize: "30px" }} color="white">
          Payment Successful
        </Typography>
        <Typography as="p" sx={{ fontSize: "16px" }} color="white">
          Amount paid: 100 credit
        </Typography>
      </DialogContent>
      <DialogActions sx={{ marginBottom: "30px" }}>
        <S.NextBtn onClick={() => null}>Next</S.NextBtn>
      </DialogActions>
    </Dialog>
  );
};

const S = {
  NextBtn: styled(Button)`
    &&& {
      background-color: #8670ff;
      color: #271c62;
      border-radius: 8px;
      font-size: 20px;
      height: 56px;
      width: 150px;

      &:disabled {
        background-color: #c2c2c2;
        color: #00000033;
      }

      &:hover {
        background-color: #6850ee;
        color: #271c62;
      }
    }
  `,
};

export default SuccessPaymentModal;
