import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AdminRoutes } from '../../pages/admin/AdminRoutes';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 7;
  background: red;
  width: 100%;
  .nav {
    position: relative;
    display: flex;
    width: 100%;
    .nav__wrapper {
      display: flex;
      position: relative;
      flex-direction: column;
      background: rgb(242, 243, 248);
      width: 100%;
    }
  }
`;

export const Body = () => {
  return (
    <Container>
      <div className="nav">
        <div className="nav__wrapper">
          {' '}
          <h1 style={{ background: 'white', height: '50px' }}>Top Nav</h1>
          <AdminRoutes />
          <Outlet />
        </div>
      </div>
    </Container>
  );
};
