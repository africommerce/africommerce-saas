import styled from 'styled-components';
import { AdminRoutes } from '../../pages/admin/AdminRoutes';
import { SideNav } from './SideNav';
import { TopNav } from './TopNav';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  position: relative;
  max-height: 20px;

  .nav {
    position: relative;
    display: flex;
    height: auto;
    min-height: 100vh;
    width: auto;
    margin: 0 auto;
    min-width: 100%;
    transition: all 3s ease;
    .nav__wrapper {
      display: flex;
      position: relative;
      flex-direction: column;
      background: rgb(242, 243, 248);
      width: 100%;

      .NavMenu {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        margin: 0 auto;
        min-height: 4rem;
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        align-items: center;
        justify-content: space-between !important;
      }
      .admin__body {
        overflow-y: scroll;
      }
    }
  }
`;

export const Body = () => {
  return (
    <Container>
      <div className="nav">
        <SideNav />
        <div className="nav__wrapper">
          <div className="NavMenu">
            <TopNav />
          </div>
          <div className="admin__body">
            <AdminRoutes />
          </div>
        </div>
      </div>
    </Container>
  );
};
