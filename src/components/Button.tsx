import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  // label: string;
  color?: "primary" | "success" | "dark" | "danger" | "warning";
  variant?: "fill" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
};

interface Colors {
  [key: string]: string | undefined;
}
const Color: Colors = {
  primary: `var(--light-primary-10)`,
  success: `var(--light-green-10)`,
  warning: `var(--light-orange-10)`,
  danger: `var(--light-red-10)`,
  dark: `var(--light-neutral-10)`,
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: "center";
  > span.left-icon {
    margin-right: 5px;
  }
  > span.right-icon {
    margin-left: 5px;
  }
  background-color: ${({ variant, color }) => {
    // if (variant && variant !== "fill") return `transparent`;
    // if (color) {
    //   return Color[color];
    // }
    // return Color["primary"];
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
    return "#fff";
  }};
  border-radius: 0.28rem;

  font-size: ${({ size }) => {
    if (size) {
      if (size === "xs") return `var(--text-2xs)`;
      if (size === "sm") return `var(--text-xs)`;
      if (size === "md") return `var(--text-sm)`;
      if (size === "lg") return `var(--text-base)`;
    }
  }};
  //line-height: 1.5;
  cursor: pointer;
  padding: ${({ size }) => {
    if (size) {
      if (size === "xs") return `8px 4px`;
      if (size === "sm") return `12px 12px`;
      if (size === "md") return `14px 16px`;
      if (size === "lg") return `16px 16px`;
    }
    return `14px 16px`;
  }};
`;

const Button = ({
  children,
  variant,
  size,
  color,
  onClick,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} color={color} onClick={onClick}>
      <span className="left-icon">{leftIcon}</span>

      {children}
      <span className="right-icon"> {rightIcon}</span>
    </StyledButton>
  );
};

export default Button;
