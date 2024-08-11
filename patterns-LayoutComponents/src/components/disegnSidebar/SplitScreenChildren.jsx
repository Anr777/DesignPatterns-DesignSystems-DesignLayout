

import styled from "styled-components";


export function SplitScreenChildren( { children, leftWidth = 1, rightWidth = 1 } ) {
  const [ left, right ] = children;
  return (
    <Container>
      <Panel $flex={ leftWidth }>
        {/* { children.at( 0 ) } */}
        { left }
      </Panel>

      <Panel $flex={ rightWidth }>
        {/* { children.at( 1 ) } */}
        { right }
      </Panel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${ props => props.$flex };
`;