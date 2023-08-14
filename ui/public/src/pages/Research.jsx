import React, { useState } from "react";

// css
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Tabs,
  Tab,
  Skeleton,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styled from "styled-components";

// icons
import { LiaCoinsSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";

import { nanoid } from "nanoid";
import ResearchModal from "../components/modal/ResearchModal";
import { useNavigate } from "react-router-dom";
import { researchStore } from "../store/researchStore";
import gameNameRegex from "../utils/gameNameRegex";
import SuccessPaymentModal from "../components/modal/SuccessPaymentModal";

const Research = () => {
  const navigate = useNavigate();
  const readyResearches = researchStore((state) => state.readyResearches);
  const progressResearches = researchStore((state) => state.progressResearches);
  const [researchTabValue, setResearchTabValue] = useState("ready");
  const [modalOpen, setModalOpen] = useState(false);
  const [researchInputValue, setResearchInputValue] = useState("");
  const handleTabChange = (event, newValue) => {
    setResearchTabValue(newValue);
  };
  const refreshData = async () => {
    console.log("refresh data");
    const url = "http://localhost:8081/refresh";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: "64d637fbb5a649d0e6301374",
        gameId: gameNameRegex(researchInputValue)[0],
        gameName: gameNameRegex(researchInputValue)[1],
      }),
    };
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box
      sx={{
        // width: "100vw",
        padding: "24px",
        overflow: "hidden",
        margin: "0px",
      }}
    >
      <Stack component="header" justifyContent="space-between" direction="row">
        <Typography variant="h1" color="white" fontSize="48px">
          Logo
        </Typography>
        <S.PaymentBtn onClick={() => navigate("/pricing")}>
          <Stack
            gap={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <LiaCoinsSolid /> 0
          </Stack>
        </S.PaymentBtn>
      </Stack>

      <Box sx={{ width: "623px", borderRadius: "16px", marginTop: "60px" }}>
        <TabContext value={researchTabValue}>
          <TabList
            value={researchTabValue}
            onChange={handleTabChange}
            textColor="inherit"
            aria-label="research tabs"
            sx={{
              backgroundColor: "#181B29",
              height: "52px",
              borderRadius: "16px",
              alignItems: "center",
              "& .MuiTabs-flexContainer": { justifyContent: "space-between" },
              "& .MuiTabs-indicator": { display: "none" },
              "& .MuiTab-root": {
                color: "#8670FF",
                opacity: "1",
                fontSize: "20px",
              },
              "& .Mui-selected": { color: "white" },
            }}
          >
            <Tab
              value="progress"
              label={`In progress  (${progressResearches.length})`}
              disabled={progressResearches.length === 0}
            />
            <Tab value="ready" label={`Ready (${readyResearches.length})`} />
            <Tab
              value="all"
              label={`All researches (${
                progressResearches.length + readyResearches.length
              })`}
            />
          </TabList>

          <Button
            onClick={refreshData}
            disabled
            sx={{
              bgcolor: "lightblue",
              color: "#111",
              marginTop: "10px",
              height: "50px",
              width: "50px",
              fontSize: "1.4rem",
              "&:hover": {
                bgcolor: "blue",
              },
            }}
          >
            <FiRefreshCcw />
          </Button>

          <Box
            maxHeight="427px"
            sx={{
              bgcolor: "#787A8233",
              borderRadius: "16px",
              marginTop: "40px",
              overflowY: "scroll",
              scrollbarWidth: "auto",
              scrollbarColor: "#3e4251 #ffffff",
              "&::-webkit-scrollbar": {
                width: "16px",
                marginRight: "10px",
              },
              "&::-webkit-scrollbar-track": {
                // background: "#ffffff",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#3e4251",
                borderRadius: "10px",
                // border: "3px solid #ffffff",
              },
            }}
          >
            <TabPanel value="progress" index={0}>
              <Stack spacing={4}>
                {progressResearches.map((res) => (
                  <S.ProgressResearch key={nanoid()}>
                    <Typography component="p">{res}</Typography>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={300}
                    />
                  </S.ProgressResearch>
                ))}
              </Stack>
            </TabPanel>
            <TabPanel value="ready" index={1}>
              <Stack spacing={4}>
                {readyResearches.map((res) => (
                  <S.ReadyResearch key={nanoid()}>
                    <Typography component="p">{res}</Typography>
                    <Button onClick={() => navigate("/chat")}>Open</Button>
                  </S.ReadyResearch>
                ))}
              </Stack>
            </TabPanel>
            <TabPanel value="all" index={2}>
              <Stack spacing={4}>
                {readyResearches.map((res) => (
                  <S.ReadyResearch key={nanoid()}>
                    <Typography component="p">{res}</Typography>
                    <Button onClick={() => navigate("/chat")}>Open</Button>
                  </S.ReadyResearch>
                ))}
                {progressResearches.map((res) => (
                  <S.ProgressResearch key={nanoid()}>
                    <Typography component="p">{res}</Typography>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={300}
                    />
                  </S.ProgressResearch>
                ))}
              </Stack>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>

      <S.AddResearchBtn onClick={() => setModalOpen(true)}>
        <Stack
          gap="8px"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <AiOutlinePlus />
          Add new research
        </Stack>
      </S.AddResearchBtn>

      <ResearchModal
        open={modalOpen}
        setOpen={setModalOpen}
        value={researchInputValue}
        setValue={setResearchInputValue}
        setResearchTabValue={setResearchTabValue}
      />
      <SuccessPaymentModal />
    </Box>
  );
};

const S = {
  PaymentBtn: styled(Button)`
    &&& {
      background-color: #8670ff;
      color: #271c62;
      border-radius: 8px;
      font-size: 20px;
      height: 56px;
      width: 100px;

      &:hover {
        background-color: #563cea;
        color: #271c62;
      }
    }
  `,
  AddResearchBtn: styled(Button)`
    &&& {
      background-color: #f3f5f7;
      color: #7b61ff;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      height: 56px;
      /* width: 190px; */
      padding: 16px 12px;
      text-transform: none;
      line-height: 24px;
      letter-spacing: 0.1px;
      margin-block: 20px;

      svg {
        width: 24px;
        height: 24px;
      }

      &:hover {
        background-color: #e9eef3;
      }
    }
  `,
  ProgressResearch: styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 16px;
  `,
  ReadyResearch: styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 16px;

    button {
      background-color: #8670ff;
      color: #271c62;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.1%;
      padding: 10px 20px;
      text-transform: none;
      border-radius: 4px;
      transition: 0.3s;

      &:hover {
        background-color: #5e47e6;
      }
    }
  `,
};

export default Research;
