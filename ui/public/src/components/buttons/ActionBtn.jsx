import React from "react";
import "./buttons.scss";
import styled from "styled-components";

export function ActionBtn({ text, w, h, radius }) {
  return (
    <CustomCss w={w} h={h} radius={radius}>
      {text}
    </CustomCss>
  );
}

const CustomCss = styled.button`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: #8670ff;
  border-radius: ${(props) => props.radius}px;
  color: black;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 16px;
`;
