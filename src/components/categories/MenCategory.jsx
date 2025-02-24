import styled from 'styled-components';
import { device } from '../../styles/BreackPoints';

const Container = styled.section`
  background-color: #fff;
  margin-top: 30px;
`;

const HeadingOne = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  padding-block: 20px;
  padding-left: 15px;
  border-bottom: 1px solid #dee2e6;
`;

const Body1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BodyContent = styled.ul`
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const BodyHeading = styled.h4`
  margin-bottom: 20px;
  font-weight: 700;
`;

const BodyList = styled.li`
  list-style-type: none;
  font-size: 0.825rem;
  margin-bottom: 15px;
`;

function MenCategory() {
  return (
    <Container>
      <HeadingOne>Men Clothing & Fashion</HeadingOne>

      <Body1>
        <BodyContent>
          <BodyHeading>Underwear Accesories</BodyHeading>
          <BodyList>Shorts</BodyList>
          <BodyList>Boxers</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>Outwear & Jackets</BodyHeading>
          <BodyList>Genuine Leather</BodyList>
          <BodyList>Suits & Blazers</BodyList>
          <BodyList>Wool & Blends</BodyList>
        </BodyContent>
      </Body1>
    </Container>
  );
}

export default MenCategory;
