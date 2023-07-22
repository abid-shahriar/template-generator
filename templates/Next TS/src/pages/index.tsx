import styled from 'styled-components';

export default function Home() {
  return <StyledContainer>hello world</StyledContainer>;
}

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
