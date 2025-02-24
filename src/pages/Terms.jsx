import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { device } from '../styles/BreackPoints';
const Container = styled.div`
  padding: 1% 5% 5%;
  margin-bottom: 0;
`;
const Term1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: rgb(27, 27, 40);
  line-height: 28.8px;
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  margin-bottom: 3%;
  margin-top: 0;
  @media ${device.mobileS} {
    flex-direction: column;
  }
`;

const Section2 = styled.div`
  max-width: 100%;
  padding: 3%;
  max-height: 100%;
  justify-content: center;
  background: white;
  text-align: justify;
`;
const P1 = styled.h2`
  margin-bottom: 2%;
`;
const P2 = styled.p`
  margin-bottom: 2%;
`;
const P3 = styled.h3`
  margin-bottom: 2%;
`;

const P6 = styled.span`
  margin-left: 1%;
`;
const P7 = styled.p`
  margin-left: 0.2%;
  margin-bottom: 0.8%;
`;

export const Terms = () => {
  return (
    <Container>
      <section>
        <Section1>
          <div>
            <Term1>Terms Conditions Page</Term1>
          </div>
          <div>Home / "Terms & conditions"</div>
        </Section1>
      </section>
      <Section2>
        <div>
          <P1>Terms and Conditions</P1>
          <P2>Welcome to Website Name!</P2>
          <P2>
            These terms and conditions outline the rules and regulations for the
            use of Company Name's Website, located at Website.com.
          </P2>
          <P2>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Website Name if you do not agree
            to take all of the terms and conditions stated on this page.
          </P2>
          <P2>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            “Client”, “You” and “Your” refers to you, the person log on this
            website and compliant to the Company's terms and conditions. “The
            Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
            “Party”, “Parties”, or “Us”, refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </P2>
          <P3>Cookies</P3>
          <P2>
            We employ the use of cookies. By accessing Website Name, you agreed
            to use cookies in agreement with the Company Name's Privacy Policy.
          </P2>
          <P2>
            Most interactive websites use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </P2>
          <P3>License</P3>
          <P2>
            Unless otherwise stated, Company Name and/or its licensors own the
            intellectual property rights for all material on Website Name. All
            intellectual property rights are reserved. You may access this from
            Website Name for your own personal use subjected to restrictions set
            in these terms and conditions.
          </P2>
          <P2>You must not:</P2>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>Republish material from Website Name</P6>
          </P7>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>Sell, rent or sub-license material from Website Name</P6>
          </P7>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>Reproduce, duplicate or copy material from Website Name</P6>
          </P7>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>Redistribute content from Website Name</P6>
          </P7>
          <P2>This Agreement shall begin on the date hereof.</P2>
          <P2>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            Company Name does not filter, edit, publish or review Comments prior
            to their presence on the website. Comments do not reflect the views
            and opinions of Company Name,its agents and/or affiliates. Comments
            reflect the views and opinions of the person who post their views
            and opinions. To the extent permitted by applicable laws, Company
            Name shall not be liable for the Comments or for any liability,
            damages or expenses caused and/or suffered as a result of any use of
            and/or posting of and/or appearance of the Comments on this website.
          </P2>
          <P2>
            Company Name reserves the right to monitor all Comments and to
            remove any Comments which can be considered inappropriate, offensive
            or causes breach of these Terms and Conditions.
          </P2>
          <P2>You warrant and represent that:</P2>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </P6>
          </P7>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </P6>
          </P7>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </P6>
          </P7>
          <P7>
            <FiberManualRecordIcon style={{ fontSize: '10.50' }} />
            <P6>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </P6>
          </P7>
          <P2>
            You hereby grant Company Name a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and edit any
            of your Comments in any and all forms, formats or media.
          </P2>
        </div>
      </Section2>
    </Container>
  );
};
