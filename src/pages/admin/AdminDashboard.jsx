import styled from 'styled-components';
import { Body } from '../../components/admin/Body';

const Container = styled.div`
  display: flex;
  width: 100vw;
  transition: all 300ms ease;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(242, 243, 248);
`;

export const AdminDashboard = () => {
  return (
    <Container>
      <Body />
    </Container>
  );
};
