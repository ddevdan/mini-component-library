import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectS value={value} onChange={onChange} id="oi">
        {children}
      </SelectS>
      <DisplayedValue role="listbox">
        {displayedValue} <Icon id="chevron-down" />
      </DisplayedValue>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  width: max-content;

  &:hover > div {
    color: black;
  }
`;
const SelectS = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;

const DisplayedValue = styled.div`
  display: flex;
  gap: 24px;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 43px;

  /* transparent-gray-15 */

  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;

  color: ${COLORS.gray700};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &:hover {
    color: black;
  }

  ${SelectS}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
