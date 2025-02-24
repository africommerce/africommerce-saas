import styled from 'styled-components';
import { device } from '../../styles/BreackPoints';

const Container = styled.section`
  background-color: #fff;
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
  @media ${device.mobileMM} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Body2 = styled.div`
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

function WomenCategory() {
  return (
    <Container>
      <HeadingOne>Women Clothing & Fashion</HeadingOne>

      <Body1>
        <BodyContent>
          <BodyHeading>Hot Categories</BodyHeading>
          <BodyList>Party Dress</BodyList>
          <BodyList>Beauty & Health</BodyList>
          <BodyList>Womens Shoe</BodyList>
          <BodyList>Beauty & Health</BodyList>
          <BodyList>Sleeping Dress</BodyList>
          <BodyList>Casual Dress</BodyList>
          <BodyList>Hoodies & Sweatshirts</BodyList>
          <BodyList>Jackets</BodyList>
          <BodyList>T-Shirts</BodyList>
          <BodyList>Shirts</BodyList>
          <BodyList>Socks</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>Wedding & Events</BodyHeading>
          <BodyList>Wedding Dresses</BodyList>
          <BodyList>Evening Dresses</BodyList>
          <BodyList>Prom Dresses</BodyList>
          <BodyList>Bridesmaid Dresses</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>Wedding & Events</BodyHeading>
          <BodyList>Wedding Dresses</BodyList>
          <BodyList>Evening Dresses</BodyList>
          <BodyList>Prom Dresses</BodyList>
          <BodyList>Bridesmaid Dresses</BodyList>
        </BodyContent>
      </Body1>

      <Body2>
        <BodyContent>
          <BodyHeading>Bottoms</BodyHeading>
          <BodyList>Skirts</BodyList>
          <BodyList>Leggings</BodyList>
          <BodyList>Jeans</BodyList>
          <BodyList>Pants & Caprices</BodyList>
          <BodyList>Shorts</BodyList>
          <BodyList>Former Pants</BodyList>
          <BodyList>Casual Pants</BodyList>
          <BodyList>Cargo Pants</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>Tops & Sets</BodyHeading>
          <BodyList>Tank Tops</BodyList>
          <BodyList>Suits</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>Accessories</BodyHeading>
          <BodyList>Eyewear</BodyList>
          <BodyList>Hats & Caps</BodyList>
          <BodyList>Gloves</BodyList>
          <BodyList>Watch</BodyList>
          <BodyList>Wallet</BodyList>
          <BodyList>Belt</BodyList>
        </BodyContent>
      </Body2>
    </Container>
  );
}

export default WomenCategory;
