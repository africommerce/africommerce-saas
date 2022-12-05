import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

function ManageProfile() {
  return (
    <Card>
      <div>

        <div>Manage Profile</div>
        <div>
          <div>Basic Info</div>
          <div>
            <form></form>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ManageProfile;
