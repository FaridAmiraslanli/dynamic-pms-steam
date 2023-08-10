import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { ActionBtn } from "../components/buttons/ActionBtn";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { todaysDate } from "../utils/todaysDate";
import { delay } from "../utils/delay";
import CopyToClipboard from "../components/copy/CopyToClipboard";
import { useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";

// TODO - tezbazar elemek ucun mui ile elemedim. mui componentlere kecirecem

function ChatPage() {
  const navigate = useNavigate()
  const [areaValue, setAreaValue] = useState("");
  const [disableSend, setDisableSend] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [animationParent] = useAutoAnimate({ duration: 400 });
  const textAreaRef = useRef(null);
  const chatEndRef = useRef(null);
  const [chats, setChats] = useState([])

  // load messages from local storage
  useEffect(() => {
    let lsMsgs = localStorage.getItem("ls-msgs");
    lsMsgs !== null && setMessages(JSON.parse(lsMsgs));
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  // save messages to local storage
  useEffect(() => {
    localStorage.setItem("ls-msgs", JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView();
  }, [messages]);

  // textarea height
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [areaValue]);

  const sendMessage = async (message) => {
    // const apiKey = "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";
    // const url = "https://api.openai.com/v1/chat/completions";
    const url = "http://localhost:8081/send_prompt";
    console.log("message sent")
    const options = {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: message,
        namespace: "719730_Uptasia",
        chat_history: {
          human: [],
          ai: [],
        },
      }),
    };
    try {
      setDisableSend(true);
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data)
      // let obj = {
      //   content: data.choices[0].message.content,
      //   who: "bot",
      // };
      // setMessages((prev) => [...prev, obj]);
      setDisableSend(false);
    } catch (err) {
      console.error(err);
    }
  };

  function addMessage() {
    if (areaValue.trim() !== "") {
      let obj = { content: areaValue, who: "user" };
      setMessages((prev) => [...prev, obj]);
      sendMessage(areaValue);
      setAreaValue("");
    }
  }

  function keyHandler(e) {
    if (e.key === "Enter") {
      addMessage();
      setTimeout(() => setAreaValue(""), 10);
    }
  }
  return (
    <S.Container sb={sidebarOpen} ref={animationParent}>
      {/* <S.Header>
        <h1>Apex Legend</h1>
      </S.Header> */}
      {sidebarOpen && (
        <S.Sidebar>
          <S.SidebarHeader>
            <S.SidebarNav>
              <S.NavBtn onClick={() => navigate("/research")}>
                <IoIosArrowBack />
              </S.NavBtn>
              <S.NavBtn
                onClick={() => {
                  setSidebarOpen(false);
                  console.log(sidebarOpen);
                }}
              >
                <TbLayoutSidebarLeftCollapse />
              </S.NavBtn>
            </S.SidebarNav>
            <ActionBtn text="New Request" radius="8" w="281" h="56" color="white"  />
          </S.SidebarHeader>
          <S.SidebarMain></S.SidebarMain>
        </S.Sidebar>
      )}

      <S.Chat sd={sidebarOpen}>
        {!sidebarOpen && (
          <S.NavBtn onClick={() => setSidebarOpen(true)}>
            <TbLayoutSidebarLeftExpand />
          </S.NavBtn>
        )}
        <S.MessagesContainer>
          {messages.map((msg) => (
            <S.Message key={nanoid()} who={msg.who}>
              <p>{msg.content}</p>
              {msg.who == "bot" && <CopyToClipboard text={msg.content} />}
            </S.Message>
          ))}
        </S.MessagesContainer>
        <S.Prompt>
          <textarea
            autoFocus
            ref={textAreaRef}
            placeholder="ask me a question"
            onKeyDown={keyHandler}
            value={areaValue}
            onChange={(e) => {
              setAreaValue(e.target.value);
            }}
          />
          <button onClick={addMessage} disabled={disableSend}>
            <BiSend />
          </button>
        </S.Prompt>
        <div ref={chatEndRef}></div>
      </S.Chat>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: ${(props) => (props.sb ? "1fr 4fr" : "1fr")};
    /* grid-template-rows: 80px auto; */
    position: relative;
    overflow: hidden;
  `,
  Header: styled.header`
    grid-column: 1/5;
    grid-row: 1/2;
    background-color: white;
    display: grid;
    place-items: center;
  `,
  Sidebar: styled.aside`
    grid-column: 1/2;
    /* grid-row: 2/4; */
    flex: 1;
    background-color: #181b29;
    display: flex;
    flex-direction: column;
    padding: 24px;
    z-index: 5;
  `,
  SidebarHeader: styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  SidebarNav: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  NavBtn: styled.button`
    background-color: transparent;
    border: 0;
    color: white;
    width: 32px;
    height: 32px;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  SidebarMain: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Chat: styled.main`
    grid-column: ${(props) => (props.sd ? "2/5" : "1fr")};
    /* grid-row: span 2/4; */
    background-color: #131623;
    position: absolute;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;

    > button {
      position: fixed;
      left: 24px;
      top: 24px;
    }
  `,
  MessagesContainer: styled.div`
    flex: 1;
    margin-bottom: 120px;
    width: 100%;
    max-width: 1000px;
  `,
  Message: styled.div`
    background-color: ${(props) =>
      props.who === "user" ? "transparent" : "#181B29"};
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 4px;

    p {
      width: 94%;
      white-space: pre-line;
    }

    &::before {
      content: "";
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background-color: ${(props) =>
        props.who === "user" ? "white" : "#5563DE"};
    }
  `,
  Prompt: styled.div`
    max-width: 1000px;
    width: 100%;
    justify-self: flex-end;
    position: fixed;
    bottom: 20px;

    button {
      position: absolute;
      top: 50%;
      right: 18px;
      transform: translateY(-50%);
      cursor: pointer;
      background-color: transparent;
      border: 0;
      font-size: 1.5rem;
    }

    textarea {
      width: 100%;
      /* max-width: 1000px; */
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      min-height: 56px;
      height: auto;
      max-height: 200px;
      border-radius: 8px;
      background-color: white;
      border: 0;
      resize: none;
      padding: 15px;
      padding-right: 40px;
      scrollbar-width: auto;
      scrollbar-color: #131623 #ffffff;
      /* Chrome, Edge, and Safari */
      &::-webkit-scrollbar {
        width: 16px;
      }
      &::-webkit-scrollbar-track {
        background: #ffffff;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #131623;
        border-radius: 10px;
        border: 3px solid #ffffff;
      }
      &:focus,
      &:active {
        border: 0;
        outline: 0;
      }
    }
  `,
};

export default ChatPage;
