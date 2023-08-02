import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsClipboard } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";

const CopyToClipboardComponent = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Btn>{copied ? <AiOutlineCheck /> : <BsClipboard />}</Btn>
    </CopyToClipboard>
  );
};

const Btn = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
`;

export default CopyToClipboardComponent;
