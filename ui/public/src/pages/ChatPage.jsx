import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";
import { nanoid } from "nanoid";
// import openai from "openai";

// TODO - tezbazar elemek ucun mui ile elemedim. mui componentlere kecirecem

function ChatPage() {
  const [messages, setMessages] = useState([]);
  function keyHandler(e) {
    if (e.key === "Enter") {
      addMessage();
    }
  }

  const sendMessage = async (message) => {
    const apiKey = "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";
    const url = "https://api.openai.com/v1/chat/completions";
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
        max_tokens: 100,
      }),
    }
    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        let obj = {content: data.choices[0].message.content, who: "bot"}
        setMessages(prev => [...prev, obj])
      });
  };

  function addMessage() {
    if (areaRef.current.value.trim() !== "") {
      let obj = {content: areaRef.current.value, who: "user"}
      setMessages(prev => [...prev, obj])

      sendMessage(areaRef.current.value);
      areaRef.current.value = "";
    }
  }
  function clickHandler() {
    addMessage();
  }

  const areaRef = useRef(null);
  return (
    <S.Container>
      <S.Header>
        <h1>Apex Legend</h1>
      </S.Header>
      <S.Sidebar>
        <S.SidebarHeader></S.SidebarHeader>
        <S.SidebarMain></S.SidebarMain>
      </S.Sidebar>
      <S.Chat>
        <S.MessagesContainer>
          {/* <S.Message who="user">
            <p>Best RPG Games</p>
          </S.Message>
          <S.Message who="bot">
            <p>
              When it comes to RPG (Role-Playing Game) games, there are many
              fantastic options available. The "best" RPG games can vary
              depending on personal preferences, but here are some highly
              acclaimed and popular RPG games that have received widespread
              praise:
            </p>
          </S.Message> */}
          {messages.map((msg) => (
            <S.Message key={nanoid()} who={msg.who}>
              <p>{msg.content}</p>
            </S.Message>
          ))}
        </S.MessagesContainer>
        <S.Prompt>
          <textarea placeholder="ask me a question" ref={areaRef} onKeyDown={keyHandler} />
          <button onClick={clickHandler}>
            <BiSend />
          </button>
        </S.Prompt>
      </S.Chat>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 80px auto;
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
    grid-row: 2/4;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
  `,
  SidebarHeader: styled.div``,
  SidebarMain: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Chat: styled.main`
    grid-column: 2/5;
    grid-row: span 2/4;
    background-color: gray;
    position: absolute;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  MessagesContainer: styled.div`
    flex: 1;
    margin-bottom: 120px;
    width: 750px;
  `,
  Message: styled.div`
    background-color: ${(props) =>
      props.who === "user" ? "transparent" : "#333"};
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;

    p {
      width: 94%;
    }

    &::before {
      content: "";
      width: 40px;
      height: 40px;
      background-color: ${(props) =>
        props.who === "user" ? "white" : "green"};
    }
  `,
  Prompt: styled.div`
    width: 750px;
    justify-self: flex-end;
    position: fixed;
    bottom: 20px;

    button {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      cursor: pointer;
      background-color: transparent;
      border: 0;
      font-size: 1.5rem;
    }

    textarea {
      width: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      height: 80px;
      border-radius: 8px;
      background-color: white;
      border: 0;
      resize: none;
      padding: 15px;
      &:focus,
      &:active {
        border: 0;
        outline: 0;
      }
    }
  `,
};

export default ChatPage;
