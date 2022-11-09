// All components for this page are to be created in components/user folder
import React from 'react'
import DashboardSidebar from "../DashboardSidebar";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  /* width: 30vw; */
  height: 30vh;
  position: relative;
  top: 0;
  margin: 0 auto;
  /* margin-top: -170px; */
  background: rgb(242, 243, 248);
`;


function Dashboard() {
  return (
    <div>
       <DashboardSidebar />
    </div>
  )
}

export default Dashboard;