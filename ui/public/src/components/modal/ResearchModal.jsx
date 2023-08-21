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
import { researchStore } from "../../store/researchStore";
import gameNameRegex from "../../utils/gameNameRegex";

const ResearchModal = ({
  open,
  setOpen,
  value,
  setValue,
  setResearchTabValue,
}) => {
  const readyResearches = researchStore((state) => state.readyResearches);
  const progressResearches = researchStore((state) => state.progressResearches);
  const setReadyResearches = researchStore((state) => state.setReadyResearches);
  const setProgressResearches = researchStore(
    (state) => state.setProgressResearches
    );
    const removeProgressResearch = researchStore(
      (state) => state.removeProgressResearch
      );
      const setLastResearch = researchStore((state) => state.setLastResearch);
      
  const sendPromptHandler = async () => {
      const url = "http://localhost:8081/upload_url";
      const options = {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          game_url: value,
          user_id: "64be880f715f1c0c24ddda21",
        }),
    };
    setOpen(false);
    if (progressResearches.length === 0) {
       setResearchTabValue("progress");
       try {
         setProgressResearches(gameNameRegex(value)[1]);
         const res = await fetch(url, options);
         const data = await res.json();
         // removeProgressResearch(gameNameRegex(value)[1]);
         // setReadyResearches(gameNameRegex(value)[1]);
         console.log("gamefdata", data);
          console.log("prompt sent");
         setLastResearch({ gameId: data.gameId, gameName: data.gameName });
       } catch (err) {
         console.error(err);
         setResearchTabValue("ready");
       }
    } 
   
  };
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiPaper-root": {
          maxHeight: "none",
          maxWidth: "none",
          margin: "0px",
          bgcolor: "#181B29",
          borderRadius: "8px",
          width: "920px",
          height: "504px",
          display: "flex",
          padding: "64px 24px 40px 24px"
          
        },
      }}
    >
      <DialogTitle sx={{ color: "white", alignSelf: "center", fontFamily: "friendsRegular", fontSize: "32px" }}>
        New research
      </DialogTitle>
      <DialogContent sx={{ marginTop: "50px", marginBottom: "60px" }}>
        <FormLabel sx={{ color: "white", fontSize: "16px", fontFamily: "friendsNormal" }}>URL</FormLabel>
        <OutlinedInput
          sx={{ bgcolor: "white", width: "100%" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <S.BackBtn
          onClick={() => {
            setOpen(false);
            setValue("");
          }}
        >
          Back
        </S.BackBtn>
        <S.NextBtn onClick={sendPromptHandler} disabled={!value}>
          Next
        </S.NextBtn>
      </DialogActions>
    </Dialog>
  );
};

const S = {
  BackBtn: styled(Button)`
    &&& {
      width: 200px;
      height: 56px;
      background-color: #f3f5f7;
      color: #7b61ff;
      border-radius: 8px;
      font-size: 20px;
      text-transform: none;
      font-family: friendsSemiBold;

      
     

      &:hover {
        background-color: #3D3761;
        color:  #FFFFFF;
      }
    }
  `,
  NextBtn: styled(Button)`
    &&& {
      background-color: #8670ff;
      color: #FFFFFF;
      border-radius: 8px;
      font-size: 20px;
      width: 200px;
      height: 56px;
      text-transform: none;
      font-family: friendsSemiBold;

      &:disabled {
        background-color: #c2c2c2;
        color: #00000033;
      }

      &:hover {
        background-color: #9785ff;
        border: 1px solid #f3f5f7;
      }
    }
  `,
};

export default ResearchModal;
