import ChatPage from "./ChatPage";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "10px", padding: "20px" }}>
        <S.Link to="/chat">chat</S.Link>
        <S.Link to="/pricing">pricing</S.Link>
        <S.Link to="/newresearch">new research</S.Link>
        <S.Link to="/researchcost">research cost</S.Link>
        <S.Link to="/demoresearch">demo research</S.Link>
      </Box>
    </>
  );
};

const S = {
  Link: styled(Link)`
    background-color: yellow;
    color: black;
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 4px;
  `,
};

export default Home;
