import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = {
    small: {
      icon: {
        "--size": "16px",
      },
      input: {
        "--font-size": 14 / 16 + "rem",
        "--padding-top": "4px",
        "--padding-left": "32px",
      },
    },

    large: {
      icon: {
        "--size": "24px",
      },
      input: {
        "--font-size": 18 / 16 + "rem",
        "--padding-top": "0",
        "--padding-left": "40px",
      },
    },
  };

  const iconSize = size === "small" ? 16 : 24;

  return (
    <Wrapper style={{ "--width": width + "px" }}>
      <VisuallyHidden>
        <NativeLabel>{label}</NativeLabel>
      </VisuallyHidden>
      <InputWrapper>
        <CustomIcon id={icon} size={iconSize} style={styles[size].icon} />
        <NativeInput
          type="text"
          placeholder={placeholder}
          style={styles[size].input}
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: var(--width);
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const CustomIcon = styled(Icon)`
  position: absolute;

  width: var(--size);
  height: var(--size);
  top: 4px;
  bottom: 4px;
  left: 8px;
  margin: auto;
`;

const NativeInput = styled.input`
  width: 100%;
  height: 30px;
  padding-top: var(--padding-top);
  padding-left: var(--padding-left);
  border: none;
  border-bottom: 1px solid ${COLORS.black};

  font-family: "Roboto";
  font-style: normal;
  font-size: var(--font-size);
  line-height: ${16 / 16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};

  outline-offset: 3px;

  &::placeholder {
    font-weight: 400;

    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeLabel = styled.label`
  position: relative;
  width: max-content;
`;

export default IconInput;
