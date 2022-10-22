import styled from 'styled-components';

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
  display: flex;
  gap: 200px;
`;

const Body2 = styled.div`
  display: flex;
  gap: 200px;
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

function CarCategory() {
  return (
    <Container>
      <HeadingOne>Automobiles & Motorcycles</HeadingOne>

      <Body1>
        <BodyContent>
          <BodyHeading>Four Seaters</BodyHeading>
          <BodyList>Toyota</BodyList>
          <BodyList>Honda</BodyList>
          <BodyList>Audi</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>SUV</BodyHeading>
          <BodyList>Luxury SUV</BodyList>
          <BodyList>Off-road SUV</BodyList>
          <BodyList>Mini SUV</BodyList>
          <BodyList>Midsize SUV</BodyList>
        </BodyContent>

        <BodyContent>
          <BodyHeading>Motorbike</BodyHeading>
          <BodyList>Cruisers</BodyList>
          <BodyList>Choppers</BodyList>
        </BodyContent>
      </Body1>

    </Container>
  );
}

export default CarCategory;
