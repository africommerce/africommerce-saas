import styled from 'styled-components';
import classes from '../styles/Home.module.css';
const Right = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  flex: 1;
  background: rgb(230, 46, 4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  /* ----------- iPad 1, 2, Mini and Air ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1000px) and (-webkit-min-device-pixel-ratio: 1) {
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  background: rgb(252, 224, 217);
  min-height: 50px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: bold;
  justify-content: center;
`;

const images = [
  {
    title: 'Women',
    src: '../../assets/earphones_b_4.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Mobile',
    src: '../../assets/watch_1.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Baby Dress',
    src: '../../assets/watch_2.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Men Cloth',
    src: '../../assets/earphones_c_3.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Kids and Toys',
    src: '../../assets/earphones_b_3.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Tools',
    src: '../../assets/speaker1.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Tools',
    src: '../../assets/speaker1.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Tools',
    src: '../../assets/speaker1.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Tools',
    src: '../../assets/speaker1.webp',
    price: '500',
    discount: '470',
  },
  {
    title: 'Tools',
    src: '../../assets/speaker1.webp',
    price: '500',
    discount: '470',
  },
];
// const CardContainer = styled.div`
//   display: flex;
//   margin: 0 auto;
//   gap: 5px;
//   margin-bottom: 10px;
//   overflow-y: scroll;
//   width: 90%;
//   justify-content: center;
//   flex-direction: column;
//   margin-top: 10px;
// `;
const Card = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  min-height: 65px;
`;
const CardLeft = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  flex: 1;
`;
const CardRight = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  flex: 1;
  font-size: 12px;
  justify-content: center;
  gap: 2px;
  flex-direction: column;
  padding: 3px;
  color: rgb(230, 46, 4);
  .price {
    text-decoration: line-through;
  }
`;
const CardImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50px;
`;
export const RightHero = () => {
  return (
    <Right>
      <HeaderContainer>
        <Header>Todays Deal</Header>
      </HeaderContainer>
      <div className={classes.RightHero}>
        {images.map((card, i) => (
          <Card key={i}>
            <CardLeft>
              <CardImage src={card.src} alt="" />
            </CardLeft>
            <CardRight>
              <span className="discount">$ {card.discount}</span>
              <span className="price">$ {card.price}</span>
            </CardRight>
          </Card>
        ))}
      </div>
    </Right>
  );
};
