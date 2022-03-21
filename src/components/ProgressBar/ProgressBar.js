/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS, PROGRESS_BAR_SIZES } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <BarWrapper>
        <InnerBar valueNow={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </InnerBar>
      </BarWrapper>
    </Wrapper>
  );
};

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height:100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${(p) => PROGRESS_BAR_SIZES[p.size] + "px"};
  padding: ${(p) => (PROGRESS_BAR_SIZES[p.size] > 12 ? "4px" : "0")};
  box-sizing: border-box;

  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
`;

const InnerBar = styled.div`
  width: ${(p) => p.valueNow + "%"};
  height: 100%;
  background: ${COLORS.primary};
`;
export default ProgressBar;
