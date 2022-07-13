import React from 'react'
import styled from 'styled-components'

/*Rules for styled components:
1) Styled components are built outside of the component they serve

2) Styled Components have to be capitalized

3) Do NOT forget semicolons!
*/

const StyledFriend = styled.div`
  color: ${prop => {
    return prop.danger ? prop.theme.dangerColor : prop.theme.primaryColor
  }};
  font-weight: ${pr => pr.bold ? 'bold' : 'initial'};
  width: 60%;
  display: flex;
  justify-content: space-between;

  &:hover{
    color: ${prop =>
    prop.theme.tertiaryColor};
    background-color: purple;
    transition: all .75s ease;
  }

  button{
    color: ${prop =>
    prop.theme.dangerColor};
    background-color: ${prop =>
    prop.theme.secondaryColor};

    &:hover{
      transform: scale(1.5);
      transition: all .75s ease;
    }
    transition: all .5s ease;
  }

  @media (max-width: 550px){
    width:100%;
  }

  transition: all .5s ease;
`;

export default function Friend({ info, action, bold }) {
  return (
    <StyledFriend danger={info.name === 'Cora'} bold={bold}>
      {info.name}
      < button onClick={() => action(info.id)}>
        See details
      </button >
    </StyledFriend >
  )
}
