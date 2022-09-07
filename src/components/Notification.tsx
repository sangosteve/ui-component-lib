import React from "react";
import styled from "styled-components";
import { FiX, FiAlertCircle } from "react-icons/fi";
type NotificationProps = {
  title?: string;
  allowClose?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  color?: string;
};

const StyledNotification = styled.div<NotificationProps>`
  position: relative;

  > div.notification-container {
    max-width: 400px;
    box-sizing: border-box;
    padding: 12px 16px;
    color: rgb(134, 142, 150);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 4px;
    > span.notification-icon {
      color: ${({ color }) => {
        if (color) {
          if (color === "teal") return `var(--light-green-10)`;
        }
      }};
    }
    > div.notification-body {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      font-size: ${() => `var(--text-sm)`};
      > label.notification-title {
        font-weight: 500;
        color: #000;
      }
    }
    > button.close-icon {
      height: 100%;
      display: flex;
      align-items: center;
      border: none;
      color: rgb(134, 142, 150);
      cursor: pointer;
      background-color: transparent;
    }
  }
`;

const Notification = ({
  title,
  icon,
  allowClose,
  color,
  children,
}: NotificationProps) => {
  return (
    <StyledNotification color={color}>
      <div className="notification-container">
        <span className="notification-icon">{icon && icon}</span>
        <div className="notification-body">
          <label className="notification-title">{title}</label>
          <p>{children}</p>
        </div>

        {allowClose && (
          <button className="close-icon">
            <FiX size={18} />
          </button>
        )}
      </div>
    </StyledNotification>
  );
};

export default Notification;
