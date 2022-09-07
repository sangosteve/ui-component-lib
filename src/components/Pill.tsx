import React from "react";
import styled from "styled-components";

type PillProps = {
  color?: "red" | "dark" | "teal" | "blue" | "orange";
  children?: React.ReactNode;
  variant?: "light" | "fill" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
};

interface Colors {
  [key: string]: string | undefined;
}
const Color: Colors = {
  blue: `var(--light-primary-10)`,
  teal: `var(--light-green-10)`,
  orange: `var(--light-orange-10)`,
  red: `var(--light-red-10)`,
  dark: `var(--light-neutral-10)`,
};

const StyledPill = styled.span<PillProps>`
  display: inline-block;
  padding: 2px 12px;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  font-size: ${({ size }) => {
    if (size) {
      if (size === "xs") return `var(--text-2xs)`;
      if (size === "sm") return `var(--text-xs)`;
      if (size === "md") return `var(--text-sm)`;
      if (size === "lg") return `var(--text-base)`;
    }

    return `var(--text-xs)`;
  }};

  background-color: ${({ variant, color }) => {
    if (variant) {
      if (variant !== "fill") return `transparent`;
      if (color) return Color[color];
    }
    return Color["primary"];
  }};

  border: ${({ variant, color }) => {
    if (variant) {
      if (variant === "fill") return "none";
      if (color && variant === "outline") return `1px solid ${Color[color]}`;
    }
    return `none`;
  }};

  color: ${({ color, variant }) => {
    if (color) {
      if (variant && variant !== "fill") return `${Color[color]}`;

      return `#fff`;
    }
    return "#000";
  }};
`;

const Pill = ({ color, children, variant, size }: PillProps) => {
  return (
    <StyledPill color={color} variant={variant} size={size}>
      {children}
    </StyledPill>
  );
};

export default Pill;
