import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 200px;
  margin-bottom: 100px;
  justify-content: space-between;
`;

const User = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <Container>
        <DashboardSidebar />
        <Outlet />
      </Container>
    </div>
  );
};

export default User;
