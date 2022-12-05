import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
const images = [
  { id: 1, src: '../../assets/seller1.jpg' },
  { id: 1, src: '../../assets/seller2.jpg' },
];
const SlideImage = styled.img`
  display: flex;
  width: auto;
`;
export const SellerHeroSection = () => {
  return (
    <div>
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
    </div>
  );
};
