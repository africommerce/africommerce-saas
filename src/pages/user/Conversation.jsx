import React from 'react';
import styled from 'styled-components';

const Case = styled.div`
  padding: 0.5rem;
`;

const Profilepic = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 20px;
`;
const Page = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  color: rgb(27, 27, 40);
`;

const Chat = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  margin: 2rem 0;
  padding: 20px 25px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;

  
`;

function Conversation() {
  return (
    <Case>
      <Page>Conversations</Page>
      <Chat>
        <div>
          <Profilepic src="https://tulikettu.me/wp-content/uploads/2022/03/TK-temp20-1080x1080-1.jpg" />
        </div>
        <div>
          <div>
            <h2>Filon Asset Store</h2>
            <p>10:33:07 25-07-2022</p>
          </div>
        </div>
        <div>
          <div>
            <h2>Jacket Blue Plain Washington</h2>
            <p>
              The monitor has the vesa mount standard 100x100mm (Screw
              dimension: M4 x 7 mm). For use only with wall mount bracket with
              minimum weight/load bearing capacity of 7.83 lbs. You can take for
              example this wall mount
              bestitems24com/monitor-wall-mount/mounting-dream-md2463 I'm very
              happy with it.
            </p>
          </div>
        </div>
      </Chat>
    </Case>
  );
}

export default Conversation;
