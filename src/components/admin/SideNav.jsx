import {
  AddShoppingCartOutlined,
  ArticleOutlined,
  CampaignOutlined,
  DesktopWindowsOutlined,
  DriveFolderUploadOutlined,
  GavelOutlined,
  GroupOutlined,
  HomeOutlined,
  InsertLinkOutlined,
  KeyboardReturnOutlined,
  LocalPhoneOutlined,
  LocalShippingOutlined,
  PaidOutlined,
  PaymentsOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
  PlaylistAddCheck,
  ScoreboardOutlined,
  SettingsOutlined,
  SettingsSuggestOutlined,
  ShoppingCartOutlined,
  SupportAgentOutlined,
} from '@mui/icons-material';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuAccordion from './MenuAccordion';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.3;
  background: rgb(20, 20, 35);
  transform: translateX(0%);
  position: relative;
  max-height: 100vh;
  overflow-y: scroll;
  gap: 1rem;
  .logo {
    display: flex;
    align-items: center;
    color: white;
    padding: 1rem;
    background: rgb(26, 26, 39);
    img {
      align-items: center;
      width: auto;
      max-width: 170px;
    }
  }
  .search {
    display: flex;
    margin: 0 auto;
    input {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      background: inherit;
      color: white;
    }
  }
  .menu__body {
    background: rgb(20, 20, 35);
  }
  .dashboard {
    text-transform: capitalize;
    background: rgb(26, 26, 39);
    padding: 1rem;
    color: white;
    font-weight: bold;
    gap: 3px;
    display: flex;
    align-items: center;
  }
`;
export const SideNav = () => {
  return (
    <Container>
      <div className="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div className="search">
        <input
          placeholder="Search"
          style={{
            border: '1px gray solid',
            borderRadius: '5px',
            padding: '10px',
          }}
        />
      </div>
      <Link to="/admin">
        <div className="dashboard">
          {' '}
          <span>
            <HomeOutlined
              style={{
                color: 'gray',
                fontSize: '17px',
                alignItems: 'center',
                fontWeight: 'normal',
                justifyContent: 'center',
                display: 'flex',
              }}
            />
          </span>{' '}
          dashboard
        </div>
      </Link>
      <div className="menu__body">
        <MenuAccordion
          icon={<PlaylistAddCheck />}
          title="POS System"
          list={['POS Manager', 'POS Configuration']}
        />

        <MenuAccordion
          icon={<ShoppingCartOutlined />}
          title="Products"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<GavelOutlined />}
          title="Auction Products"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<AddShoppingCartOutlined />}
          title="Whole Sale Product"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<PaidOutlined />}
          title="Sales"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<LocalShippingOutlined />}
          title="Delivery Boy"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<KeyboardReturnOutlined />}
          title="Refund"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<PeopleAltOutlined />}
          title="Customers"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<PersonOutlineOutlined />}
          title="Sellers"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<DriveFolderUploadOutlined />}
          title="Upload Files"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<ArticleOutlined />}
          title="Reports"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<CampaignOutlined />}
          title="Blog System"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<CampaignOutlined />}
          title="Marketing"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<SupportAgentOutlined />}
          title="Support"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<InsertLinkOutlined />}
          title="Affliate System"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<PaymentsOutlined />}
          title="Offline System Payment"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<PaymentsOutlined />}
          title="Payment Gateway"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<ScoreboardOutlined />}
          title="Club Point System"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<LocalPhoneOutlined />}
          title="OTP System"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<LocalPhoneOutlined />}
          title="Payment Gateway Addon"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<DesktopWindowsOutlined />}
          title="Website Setup"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<SettingsOutlined />}
          title="Setup & Configuration"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<GroupOutlined />}
          title="Staffs"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<GroupOutlined />}
          title="System"
          list={['POS Manager', 'POS Configuration']}
        />
        <MenuAccordion
          icon={<SettingsSuggestOutlined />}
          title="Addon Manager"
          list={['POS Manager', 'POS Configuration']}
        />
      </div>
    </Container>
  );
};
