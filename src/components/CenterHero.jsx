import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const Center = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  gap: 10px;
  justify-content: space-between;
  border-radius: 10px;
  flex: 4;
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
  flex: 1;
  gap: 10px;
  align-items: flex-end;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    width: 100%;
    max-width: 480px;
    flex-direction: row;
    background: red;
    flex-wrap: wrap;
  }
`;
const CartegoryImage = [
  { title: 'Women', src: '../../assets/earphones_b_4.webp' },
  { title: 'Mobile', src: '../../assets/watch_1.webp' },
  { title: 'Baby Dress', src: '../../assets/watch_2.webp' },
  { title: 'Men Cloth', src: '../../assets/earphones_c_3.webp' },
  { title: 'Kids and Toys', src: '../../assets/earphones_b_3.webp' },
  { title: 'Tools', src: '../../assets/speaker1.webp' },
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
  background: rgb(255, 255, 255, 0.3);
  text-align: center;
  border-radius: 5px;
  padding: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const CardImage = styled.img`
  max-width: 100px;
`;
const CartTitle = styled.div``;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
