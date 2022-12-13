import React from 'react';
import styled from 'styled-components';
import CategoryHeader from '../components/categories/CategoryHeader';
import WomenCategory from '../components/categories/WomenCategory';
import MenCategory from '../components/categories/MenCategory';
import TechCategory from '../components/categories/TechCategory';
import CarCategory from '../components/categories/CarCategory';
import KidsCategory from '../components/categories/KidsCategory';

const Categories = styled.section`
  margin-top: 60px;
  width: 100%;
`;

export const AllCategories = () => {
  return (
    <Categories >
      <CategoryHeader/>
      <WomenCategory />
      <MenCategory />
      <TechCategory />
      <CarCategory />
      <KidsCategory />
    </Categories>
  );
};
