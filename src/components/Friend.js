import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledFriend = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 5px;
    border-borrom: 2px solid white;

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};

    @media ${pr => pr.theme.breakpointMobile} {
      width: 75%;
    }

    transition: all .2s ease-in-out;
    &:hover {
      background-color: ${pr => pr.theme.secondaryColor};
      color: ${pr => pr.theme.primaryColor};
    }

    &::before {
      content: "${pr => pr.besty ? '💚' : '😀'}";
    }

    button {
      background-color: ${pr => pr.theme.tertiaryColor};
      &:hover {
        transform: scale(1.1);
      }
    }

    // ------- start of the animation! --------
    transform: scale(2);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
`

export default function Friend({ info, action, besty }) {
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
