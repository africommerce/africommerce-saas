import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import bottomImage from '../assests/placeholder.jpg';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  gap: 10px;
  justify-content: space-between;
  border-radius: 10px;
  flex-basis: 58%;
`;

const CenterTop = styled.div`
  display: flex;
  flex: 1.8;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;
const CenterButtom = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-device-width: 700px) and (-webkit-min-device-pixel-ratio: 1) {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  @media only screen and (max-device-width: 300px) and (-webkit-min-device-pixel-ratio: 1) {
    grid-template-columns: 1fr;
  }
`;
const CartegoryImage = [
  { title: 'Women', src: bottomImage },
  { title: 'Mobile', src: bottomImage },
  { title: 'Baby Dress', src: bottomImage },
  { title: 'Men Cloth', src: bottomImage },
  { title: 'Kids and Toys', src: bottomImage },
  { title: 'Tools', src: bottomImage },
];
const images = [
  { id: 1, src: '../../assets/banner1.png' },
  { id: 1, src: '../../assets/banner1.png' },
  { id: 1, src: '../../assets/banner1.png' },
];
const SlideImage = styled.img`
  display: flex;
  width: auto;
  height: 100%;
`;
const Card = styled.div`
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const CardImage = styled.img`
  width: 100%;
  max-height: 78px;
  max-width: 107px;
`;
const CartTitle = styled.div`
  font-size: 14px;
`;
const CardContainer = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  box-sizing: border-box;
  flex-basis: 16.5%;

  margin-right: 20px;
  @media only screen and (max-device-width: 700px) and (-webkit-min-device-pixel-ratio: 1) {
    width: 90%;
    margin-inline: 20px;
    margin-right: 0px;
  }
`;
export const CenterHero = () => {
  return (
    <Center>
      <CenterTop>
        <Carousel
          renderIndicator={false}
          showThumbs={false}
          autoPlay={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          interval={3000}
          labels={false}
        >
          {[
            images.map((slide) => (
              <SlideImage src={slide.src} key={slide.id} alt="" />
            )),
          ]}
        </Carousel>
      </CenterTop>
      <CenterButtom>
        {CartegoryImage.map((el, i) => (
          <CardContainer key={`${el.title + i}`}>
            <Card>
              <CardImage src={el.src} alt="" />
              <CartTitle>{el.title}</CartTitle>
            </Card>
          </CardContainer>
        ))}
      </CenterButtom>
    </Center>
  );
};
