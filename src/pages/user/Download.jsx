import React from 'react';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  font-family: 'Open Sans', 'sans-serif';
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  color: #1b1b28;

  overflow-x: hidden;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    max-width: 720px;
  }
`;

const Card = styled.div`
 display: flex;
 flex-direction: row;
  margin: 0 auto;
  padding: 1rem;

`;

function Download() {
  return (
    <Card>
      <DashboardSidebar />
      <Container>
        <div>
          <div>
            <div>
              <h5>Download Your Product</h5>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="" style={{textDecoration: "none", color:"red"}}>
                        Adobe Photoshop Elements & Premiere Elements 2021
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <DownloadForOfflineIcon />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
}

export default Download;
