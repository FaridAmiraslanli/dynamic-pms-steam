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
import coins from "../assets/sass/Icons/Coins.svg";
import plusPurple from "../assets/sass/Icons/PlusPurple.svg";
import { io } from "socket.io-client";
import { creditStore } from "../store/creditStore";

const Research = () => {
  const navigate = useNavigate();
  const readyResearches = researchStore((state) => state.readyResearches);
  const credits = creditStore(state => state.credits)
  const setReadyResearches = researchStore((state) => state.setReadyResearches);
  const removeProgressResearch = researchStore(
    (state) => state.removeProgressResearch
  );
  const lastResearch = researchStore((state) => state.lastResearch);
  const setLastResearch = researchStore((state) => state.setLastResearch);
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
        gameId: lastResearch.gameId,
        gameName: lastResearch.gameName,
        // gameId: gameNameRegex(researchInputValue)[0],
        // gameName: gameNameRegex(researchInputValue)[1],
      }),
    };
    console.log("lastResearch", lastResearch);
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      if (data.gameObject.namespace) {
        removeProgressResearch(data.gameObject.name);
        setResearchTabValue("ready");

        setReadyResearches(data.gameObject.name);
        setLastResearch({});
      }
    } catch (err) {
      console.error(err);
    }
  };

  const socket = io("http://localhost:3030");
  // socket.on("upload_url_result_frontend", (data) => {
  //   console.log("connected");
  // });
  socket.on("connection", (socket) => {
    console.log("Front connected");

    // socket.on("event", (data) => {
    //   console.log("event_listen", data);
    // });
    // socket.emit("data", (data) => {
    //   data = {
    //     name: "Sabina",
    //     age: 21,
    //   };
    //   console.log("data_SET", data);
    // });
  });
  socket.emit("data", (data) => {
    data = {
      name: "Sabina",
      age: 21,
    };
    console.log("data_SET", data);
  });

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
        <Typography
          variant="h1"
          color="white"
          fontSize="48px"
          fontFamily="friendsRegular"
        >
          Logo
        </Typography>
        <S.PaymentBtn onClick={() => navigate("/pricing")}>
          <Stack
            gap={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            fontFamily="friendsRegular"
          >
            <img src={coins} />
             <Typography>{credits === 0 ? "Add Balance" : credits}</Typography>
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
              padding: "0px 10px 0px 10px",
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
                fontFamily: "friendsSemiBold",
                textTransform: "none",
              },
              "& .Mui-selected": { color: "white" },
            }}
          >
            <Tab
              value="progress"
              label={`In progress  (${progressResearches.length})`}
              // disabled={progressResearches.length === 0}
            />
            <Tab value="ready" label={`Ready (${readyResearches.length})`} />
            <Tab
              value="all"
              label={`All research (${
                progressResearches.length + readyResearches.length
              })`}
            />
            {/* <Tab
              value="Fix"
              label={`Fix research (${readyResearches.length})`}
            /> */}
          </TabList>

          {/* <Button
            onClick={refreshData}
            // disabled
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
          </Button> */}

          <Box
            maxHeight="427px"
            sx={{
              bgcolor: "#787A8233",
              borderRadius: "16px",
              marginTop: "40px",
              overflowY: "scroll",
              scrollbarWidth: "auto",
              scrollbarColor: "#3E4251 #ffffff",
              "&::-webkit-scrollbar": {
                width: "8px",
                marginRight: "10px",
              },
              "&::-webkit-scrollbar-track": {
                // background: "#ffffff",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#3e4251",
                borderRadius: "24px",
                // border: "3px solid #ffffff",
              },
            }}
          >
            <TabPanel value="progress" index={0}>
              <Stack spacing={4}>
                {progressResearches.map((res) => (
                  <S.ProgressResearch key={nanoid()}>
                    <Typography component="p" fontSize="20px">
                      {res}
                    </Typography>
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
                {readyResearches.map((res, ind) => (
                  <S.ReadyResearch key={nanoid()}>
                    <Typography
                      fontFamily="friendsNormal"
                      component="p"
                      fontSize="16px"
                    >
                      {res}
                    </Typography>
                    <Button
                      sx={{ fontFamily: "friendsRegular" }}
                      onClick={() => {
                        // spendCredits(20)
                        navigate("/chat");
                      }}
                    >
                      Open
                    </Button>
                  </S.ReadyResearch>
                ))}
              </Stack>
            </TabPanel>
            <TabPanel value="all" index={2}>
              <Stack spacing={4}>
                {readyResearches.map((res) => (
                  <S.ReadyResearch key={nanoid()}>
                    <Typography
                      fontFamily="friendsNormal"
                      component="p"
                      fontSize="16px"
                    >
                      {res}
                    </Typography>
                    <Button
                      sx={{ fontFamily: "friendsRegular" }}
                      onClick={() => navigate("/chat")}
                    >
                      Open
                    </Button>
                  </S.ReadyResearch>
                ))}
                {progressResearches.map((res) => (
                  <S.ProgressResearch key={nanoid()}>
                    <Typography component="p" fontSize="16px">
                      {res}
                    </Typography>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={300}
                    />
                  </S.ProgressResearch>
                ))}
              </Stack>
            </TabPanel>
            {/* <TabPanel value="fix" index={3}>
              <Stack spacing={4}>
                {readyResearches.map((res, ind) => (
                  <S.ReadyResearch key={nanoid()}>
                    <Typography
                      fontFamily="friendsNormal"
                      component="p"
                      fontSize="16px"
                    >
                      {res}
                    </Typography>
                    <Button
                      sx={{ fontFamily: "friendsRegular" }}
                      onClick={() => navigate("/chat")}
                    >
                      Open
                    </Button>
                  </S.ReadyResearch>
                ))}
              </Stack>
            </TabPanel> */}
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
          <img className="PlusIcon" src={plusPurple}></img>
          Add new research
        </Stack>
      </S.AddResearchBtn>

      <Button
        onClick={refreshData}
        // disabled
        sx={{
          marginLeft: "20px",
          marginBottom: "10px",
          bgcolor: "#FFFFFF",
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
      width: 197px;
      height: 56px;
      background-color: #8670ff;
      color: #ffffff;
      border-radius: 8px;
      font-size: 20px;
      text-transform: none;

      &:hover {
        background-color: #9785ff;
        border: 1px solid #f3f5f7;
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

      &:hover {
        background-color: #3d3761;
        color: #ffffff;
      }
    }
  `,
  ProgressResearch: styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px;
  `,
  ReadyResearch: styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    button {
      width: 93px;
      height: 40px;
      background-color: #8670ff;
      color: #ffffff;
      font-size: 20px;
      letter-spacing: 0.1%;
      padding: 10px 20px;
      text-transform: none;
      border-radius: 4px;
      transition: 0.3s;

      &:hover {
        background-color: #9785ff;
        border: 1px solid #f3f5f7;
      }
    }
  `,
};

export default Research;
