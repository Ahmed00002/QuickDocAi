import React from "react";
import styled from "styled-components";

const AiButton = () => {
  return (
    <StyledWrapper>
      <button className="button px-4 py-1">
        Chat With AI
        <div className="hoverEffect">
          <div />
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: 0;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;
    transition: all 0.02s;
    font-weight: bold;
    cursor: pointer;
    color: #1c1c1e;
    z-index: 0;
    box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
  }

  .button:hover {
    background: rgb(193, 228, 248);
    color: rgb(33, 0, 85);
  }

  .button:active {
    transform: scale(0.97);
  }

  .hoverEffect {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .hoverEffect div {
    background: #00d9f5;
    // background: linear-gradient(90deg, #00c6ff 0%, #0072ff 49%, #00f5a0 100%);
    // background: linear-gradient(90deg, #8e2de2 0%, #4a00e0 49%, #00d2ff 100%);
    // background: linear-gradient(90deg, #141e30 0%, #243b55 49%, #00c6ff 100%);
    background: linear-gradient(90deg, #f9d423 0%, #ff4e50 49%, #e55d87 100%);
    border-radius: 40rem;
    width: 10rem;
    height: 10rem;
    transition: 0.4s;
    filter: blur(20px);
    animation: effect infinite 3s linear;
    opacity: 0.5;
  }

  .button:hover .hoverEffect div {
    width: 8rem;
    height: 8rem;
  }

  @keyframes effect {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default AiButton;
