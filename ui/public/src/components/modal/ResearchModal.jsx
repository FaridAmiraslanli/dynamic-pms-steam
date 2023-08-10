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
} from "@mui/material";
import styled from "styled-components";

const ResearchModal = ({ open, setOpen, value, setValue }) => {
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiPaper-root": {
          bgcolor: "#181B29",
          borderRadius: "8px",
          width: "920px",
        //   height: "504px",
          display: "flex",
          padding: "5px 10px"
        },
      }}
    >
      <DialogTitle sx={{ color: "white", alignSelf: "center" }}>
        New Research
      </DialogTitle>
      <DialogContent sx={{marginTop: "20px", marginBottom: "50px"}}>
        <FormLabel sx={{ color: "white" }}>URL</FormLabel>
        <OutlinedInput
          sx={{ bgcolor: "white", width: "100%" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{marginBottom: "30px"}}>
        <S.BackBtn
          onClick={() => {
            setOpen(false);
            setValue("");
          }}
        >
          Back
        </S.BackBtn>
        <S.NextBtn onClick={() => null} disabled={!value}>
          Next
        </S.NextBtn>
      </DialogActions>
    </Dialog>
  );
};

const S = {
  BackBtn: styled(Button)`
    &&& {
      background-color: #f3f5f7;
      color: #7b61ff;
      border-radius: 8px;
      font-size: 20px;
      height: 56px;
      width: 150px;

      &:hover {
        background-color: #c9d9ea;
      }
    }
  `,
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

export default ResearchModal;
