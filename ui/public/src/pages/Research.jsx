import { Box, Button, Container, Stack, Typography, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import { LiaCoinsSolid } from "react-icons/lia";
import styled from "styled-components";

const Research = () => {
  const [researchTabValue, setResearchTabValue] = useState("ready");
  const handleTabChange = (event, newValue) => {
    setResearchTabValue(newValue)
  }
  return (
    <Box sx={{ width: "100vw", padding: "24px" }}>
      <Stack component="header" justifyContent="space-between" direction="row">
        <Typography variant="h1" color="white" fontSize="48px">
          Logo
        </Typography>
        <S.PaymentBtn>
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

      <Box sx={{ width: "623px", borderRadius: "16px", bgcolor: "#181B29" }}>
        <Tabs
          value={researchTabValue}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="research tabs"
        >
          <Tab value="progress" label="In progress" />
          <Tab value="ready" label="Ready" />
          <Tab value="all" label="All researches" />
        </Tabs>
      </Box>
    </Box>
  );
};

const S = {
  PaymentBtn: styled(Button)`
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
  `,
};

export default Research;
