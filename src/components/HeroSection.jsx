import styled from 'styled-components';
import { CenterHero } from './CenterHero';
import { LeftHero } from './LeftHero';
import { RightHero } from './RightHero';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  position: relative;
  margin: 0 100px;
  gap: 10px;

  .menu {
    background: white;
    position: absolute;
    width: 81%;
    right: 0;
    height: 100%;
    max-height: 500px;
    display: none;
    z-index: 22;
    justify-content: space-between;
    padding: 10px;
    gap: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    div {
      display: flex;
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const HeroSection = (props) => {
  return (
    <Container>
      <LeftHero />
      <div className="menu">
        <div>1</div>

        <div>2</div>
        <div>3</div>
      </div>
      <CenterHero />
      <RightHero />
    </Container>
  );
};
