import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 7;
`;

export const Body = () => {
  return (
    <Container>
      <div className="nav">
        <div className="nav__wrapper">
          {' '}
          <div className="left">Left</div>
          <div className="right">Right</div>
        </div>
      </div>
    </Container>
  );
};
