import styled from 'styled-components';
import { Body } from '../../components/admin/Body';
import { SideNav } from '../../components/admin/SideNav';

const Container = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  top: 0;
  margin: 0 auto;
  background: rgb(242, 243, 248);
`;

export const AdminDashboard = () => {
  console.log('admin dashboard');
  return (
    <Container>
      <SideNav />
      <Body />
    </Container>
  );
};
