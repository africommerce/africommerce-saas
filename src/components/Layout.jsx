import { Footer } from './Footer';
import { NavBar } from './header/NavBar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  height: auto;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #333;
`;
const Children = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: 170px;
`;
const Children2 = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  max-width: 100%;
`;
export const Layout = (props) => {
  const location = useLocation();
  return (
    <Container>
      {location.pathname.includes('/admin') ||
      location.pathname.includes("/auth-seller") ? (
        <Children2>{props.children}</Children2>
      ) : (
        <div>
          <NavBar />
          <Children>{props.children}</Children>
          <Footer />
        </div>
      )}
    </Container>
  );
};
