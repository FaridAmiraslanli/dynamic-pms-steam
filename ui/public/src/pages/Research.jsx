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
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styled from "styled-components";

// icons
import { LiaCoinsSolid } from "react-icons/lia";
import {AiOutlinePlus} from "react-icons/ai"


import ResearchModal from "../components/modal/ResearchModal";
import { useNavigate } from "react-router-dom";
import { researchStore } from "../store/researchStore";


const Research = () => {
  const navigate = useNavigate()
  const readyResearches = researchStore((state) => state.readyResearches);
  const [researchTabValue, setResearchTabValue] = useState("ready");
  const [modalOpen, setModalOpen] = useState(false)
  const [researchInputValue, setResearchInputValue] = useState("");
  const handleTabChange = (event, newValue) => {
    setResearchTabValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100vw",
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
              "& .MuiTab-root": { color: "#8670FF", opacity: "1", fontSize: "20px" },
              "& .Mui-selected": { color: "white" },
            }}
          >
            <Tab value="progress" label="In progress" />
            <Tab value="ready" label={`Ready (${readyResearches.length})`} />
            <Tab value="all" label="All researches" />
          </TabList>

          <Box
            sx={{
              bgcolor: "#787A8233",
              borderRadius: "16px",
              marginTop: "40px",
            }}
          >
            <TabPanel value="progress" index={0}>
              Item One
            </TabPanel>
            <TabPanel value="ready" index={1}>
              <Stack spacing={4}>
                {readyResearches.map((res) => (
                  <S.ReadyResearch>
                    {res}
                    <Button onClick={() => navigate("/chat")}>Open</Button>
                  </S.ReadyResearch>
                ))}
              </Stack>
            </TabPanel>
            <TabPanel value="all" index={2}>
              Item Three
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
      />
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
      transition: .3s;

      &:hover {
        background-color: #5e47e6
      }
    }
  `,
};

export default Research;
