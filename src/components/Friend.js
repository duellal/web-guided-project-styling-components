import React from 'react'
import styled from 'styled-components'

/*Rules for styled components:
1) Styled components are built outside of the component they serve

2) Styled Components have to be capitalized

3) Do NOT forget semicolons!
*/

const StyledFriend = styled.div`
  color: ${prop =>
    prop.theme.primaryColor};
  font-weight: bold;
  width: 60%;
  display: flex;
  justify-content: space-between;

  &:hover{
    color: ${prop =>
    prop.theme.tertiaryColor};
  }

  button{
    color: ${prop =>
    prop.theme.dangerColor};
    background-color: ${prop =>
    prop.theme.secondaryColor};
  }

  @media (max-width: 550px){
    width:100%;
  }
`;

export default function Friend({ info, action }) {
  return (
    <StyledFriend>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
