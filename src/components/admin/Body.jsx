import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 7;
  background: green;
  height: 100vh;
  flex-direction: column;
`;
export const Body = () => {
  return <Container>Body</Container>;
};
