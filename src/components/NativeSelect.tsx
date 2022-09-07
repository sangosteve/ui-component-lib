import React from "react";
import styled from "styled-components";
type SelectProps = {
  children?: React.ReactNode;
};
const StyledSelect = styled.select<SelectProps>`
  padding: 4px 8px;
  font-size: 16px;
`;

const NativeSelect = ({ children }: SelectProps) => {
  return <StyledSelect>{children}</StyledSelect>;
};

export default NativeSelect;
